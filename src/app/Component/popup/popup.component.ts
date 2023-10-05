import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentService } from 'src/app/Service/student.service';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  
  

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private popupService:StudentService ,private ref: MatDialogRef<PopupComponent>){}

  states = [] = [
    { value: 'state-0', viewValue: 'Telangana' },
    { value: 'state-1', viewValue: 'Andhra Pradesh' },
    { value: 'state-2', viewValue: 'Tamil Nadu' },
  ];

  inputdata: any; 
  editdata:any;
   closemessage= "Close using Directive"
  ngOnInit(): void {
   this.inputdata = this.data;
  }
  

  closepup(){
    return this.ref.close('Closed using Function');
  }
  

  id: number = 0

  public studentForm: FormGroup = new FormGroup({
     name: new FormControl(),
     gender: new FormControl(),
     mobile: new FormControl(),
     email: new FormControl(),
     batch: new FormControl(),
     address: new FormGroup({
       city: new FormControl(),
       mandal: new FormControl(),
       district: new FormControl(),
       state: new FormControl(),
       pincode: new FormControl()
     }),
     sourceType: new FormControl(),
     sourceForm: new FormControl(),
     referralName: new FormControl(),
 
     company: new FormGroup({
       name: new FormControl(),
       location: new FormControl(),
       package: new FormControl(),
       offerDate: new FormControl()
     }),
 
     education: new FormArray([])
   });
 
   get educationFormCard() {
     return this.studentForm.get('education') as FormArray;
   }
 
   addEducation() {
     this.educationFormCard.push(
       new FormGroup({
         qualification: new FormControl(),
         year: new FormControl(),
         percentage: new FormControl()
       })
     )
   }
   clearForm() {
     this.studentForm.reset({
       name: '',
       gender: '',
       mobile: '',
       email: '',
       batch: '',
       address: {
         city: '',
         mandal: '',
         district: '',
         state: '',
         pincode: ''
       },
       sourceType: '',
       sourceForm: '',
       referralName: '',
       company: {
         name: '',
         location: '',
         package: '',
         offerDate: ''
       },
       education: []
     });
   }
   
   
   onSubmit() {
    if(this.id){
     this.popupService.updatestudent(this.id, this.studentForm.value).subscribe(
      (data:any)=>{
        alert("Updated Successfully")
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
     )
    }
    else{
     console.log(this.studentForm)
       this.popupService.createstudent(this.studentForm.value).subscribe(
         (data:any) => {
           alert("Student Create Successfully");
         },
         (err: any) => {
           alert("Internal Server Error")
         }
       )
        }
   }
   
   removeEducation(i: number) {
     this.educationFormCard.removeAt(i);
   }
 

}
