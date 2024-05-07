import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { CommonService } from '../../../services/common.service';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule, // FOR DYNAMIC FORMS
    FormsModule, // Include FormsModule here
    DialogModule, // FOR USING POPUP
    DropdownModule, // FOR DROPDOWN OF SINGLE SELECT
    MultiSelectModule, // FOR MULTICHOICE 
    ToastModule // TO SHOW ERROR OR SOMETHING
  ],
  exports: [
    HeaderComponent
  ],
  providers:[
    CommonService,
    MessageService
  ]
})
export class HeaderModule { }
