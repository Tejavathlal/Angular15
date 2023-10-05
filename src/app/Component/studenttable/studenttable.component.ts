import { Component, createComponent } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StudentService } from 'src/app/Service/student.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { CreatestudentComponent } from '../createstudent/createstudent.component';
import { PopupComponent } from '../popup/popup.component';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentdetailsComponent } from '../studentdetails/studentdetails.component';

@Component({
  selector: 'app-studenttable',
  templateUrl: './studenttable.component.html',
  styleUrls: ['./studenttable.component.css']
})
export class StudenttableComponent implements AfterViewInit {


  displayedColumns: string[] = ['id', 'name', 'gender', 'mobile', 'batch', 'district', 'state', 'location', 'package', 'action'];

  dataSource = new MatTableDataSource<any>();
  term: string = "";

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private studentService: StudentService,private activatedRoute:ActivatedRoute, private router:Router, private dailog:MatDialog) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadstudentData();
  }

  applyFilter() {
    this.dataSource.filter = this.term.trim().toLocaleLowerCase();
  }

  loadstudentData() {
    this.studentService.getStudent().subscribe(
      (data: any) => {
        this.dataSource.data = data;
      },
      (err: any) => {
        alert("Internal Server Error");
      }
    )
  }

  delete(id: number) {
    this.studentService.deletestudent(id).subscribe(
      (data: any) => {
        alert("Delete Successfully");
        location.reload();
      },
      (err: any) => {
        alert("Internal Server Error");
      }
    )
  }

  openDialog() {
    this.dailog.open(CreatestudentComponent, {
      width: '100%',
      height: '100%',
    })
  }

  openpopup(code:any, title:any, Component:any){
  var _popup=  this.dailog.open(Component, {
      width:'50%',
      height:'100vh',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data:{
        title:title,
        code:code
      }
    });
    _popup.afterClosed().subscribe(term=>{
      console.log(term);
    }

    )
  }

  view(id:number){
this.router.navigateByUrl("/dashboard/studentdetails/"+id);
  }
  edit(id:number){
     this.router.navigateByUrl("/dashboard/editdetails/"+id)

  }
  
  editCustomer(code:number){
    this.openpopup(code, 'Edit Customer', PopupComponent);
  }

  addcustomer(){
    this.openpopup(0, 'Add Customer', PopupComponent);
  }

  viewdetails(code:any){
  this.openpopup(0, 'View Details', StudentdetailsComponent);
  } 
}
