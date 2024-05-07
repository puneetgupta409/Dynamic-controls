import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
@Component({
    selector: 'app-header', // HTML selector for using this component
    templateUrl: './header.component.html', // Path to the component's HTML template file
    styleUrls: ['./header.component.scss'], // Path to the component's CSS styles file
})

// Define the component class
export class HeaderComponent implements OnInit {
    constructor(protected commonService: CommonService,protected formBuilder: FormBuilder , protected messageService: MessageService) { }
    protected modalFlag: boolean = false;
    protected formData: any = [];
    protected dynamicForm!: FormGroup;
    protected selectedItens: any = [];
    ngOnInit(): void {
        this.setFormData(); 
    }

    // TO SET DYNAMIC FORM ACCORDING THE JSON YOU PROVIDE
    setFormData() {
        this.dynamicForm = this.formBuilder.group({});
        this.formData = this.commonService.getFormData();
        if (this.formData && this.formData.length) {
            for (const field of this.formData) {
                let controlValue = field.value;
                let validators = [];
                if (field.required) {
                    validators.push(Validators.required);
                }
                if (field.dataType === 'singleLineText' || field.dataType === 'multiLineText') {
                    this.dynamicForm.addControl(field.label, this.formBuilder.control(controlValue, validators));
                } else if (field.dataType === 'number') {
                    this.dynamicForm.addControl(field.label, this.formBuilder.control(controlValue, validators));
                } else if (field.dataType === 'singleChoice' || field.dataType === 'multiChoice') {
                    this.dynamicForm.addControl(field.label, this.formBuilder.control([], validators));
                }
            }
        }
    }    

    // TO SHOW MODAL     
    showAddModal(){
        this.modalFlag = true;
    }


    // TO CLOSE THE MODAL 
    closeDataModal(){
        this.modalFlag = false;
        this.dynamicForm.reset(); // Reset the form to its initial state
        this.setFormData(); // Set the form data again with default values
    }
    
    // TO SUBMIT THE FORM 
    onSubmit(){
        if(this.dynamicForm.status === 'INVALID'){
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Please Enter Required Fields',
            });
            return;
        }
        if(this.dynamicForm.value && this.dynamicForm.value.age && this.dynamicForm.value.age == '0'){
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Age must be greater than zero',
            });
            return;
        }
        this.commonService.getTableDataSubscriber(this.dynamicForm.value); // SEND DATA TO HOMECOMPONENT
        this.modalFlag = false;
        this.dynamicForm.reset(); // Reset the form to its initial state
        this.setFormData(); // Set the form data again with default values
    }
}