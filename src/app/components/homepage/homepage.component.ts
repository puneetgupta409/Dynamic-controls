import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
@Component({
    selector: 'app-homepage', // HTML selector for using this component
    templateUrl: './homepage.component.html', // Path to the component's HTML template file
    styleUrls: ['./homepage.component.scss'], // Path to the component's CSS styles file
})

// Define the component class
export class HomepageComponent implements OnInit , OnDestroy {
    protected dynamicData: any = [];
    protected dynamicFormData: any = [];
    constructor(protected commonService: CommonService) { }
    ngOnInit(): void {
        this.dynamicFormData = this.commonService.getFormData();
        this.commonService.tableDataLisenter.subscribe((data: any) => {
            // Handle the emitted data here
            if(data){
                this.dynamicData.push(data);
            };
        });
    }
    
    // TO SHOW THE COLUMN OR NOT
    shouldRenderHeader(label: string): boolean {
        return true;
    }

    ngOnDestroy(): void {
        this.commonService.tableDataLisenter.unsubscribe();
    }
}