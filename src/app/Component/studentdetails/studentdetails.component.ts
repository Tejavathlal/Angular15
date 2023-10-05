import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/Service/student.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {

  student: any = [];
  id: number = 0;
  
  

  constructor(private activatedRoute: ActivatedRoute,private studentService: StudentService,
    public dialogRef: MatDialogRef<StudentdetailsComponent>) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (data: any) => {
      this.id = data.id;

      this.studentService.createstudent(this.id).subscribe(
        (data: any) => {
        this.student = data;
      });
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
