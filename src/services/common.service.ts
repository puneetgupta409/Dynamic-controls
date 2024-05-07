import { EventEmitter, Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class CommonService {
    protected dynamicFormData = [
        {
            "label": "firstName",
            "dataType": "singleLineText",
            "value": "",
            "required": true
        },
        {
            "label": "lastName",
            "dataType": "singleLineText",
            "value": "",
            "required": true
        },
        {
            "label": "age",
            "dataType": "number",
            "value": "0",
            "required": true
        },
        {
            "label": "gender",
            "dataType": "singleChoice",
            "value": ['male', 'female'],
            "required": true
        },
        {
            "label": "skills",
            "dataType": "multiChoice",
            "value": ['Angular', 'CSS', 'Node'],
            "required": true
        },
        {
            "label": "description",
            "dataType": "multiLineText",
            "value": "",
            "required": false
        }
    ];
    tableDataLisenter: EventEmitter<any> = new EventEmitter<any>();
    constructor() { }
    getFormData(): any[] {
        return this.dynamicFormData;
    }
    getTableDataSubscriber(data:any){
        this.tableDataLisenter.emit(data);
    }
}