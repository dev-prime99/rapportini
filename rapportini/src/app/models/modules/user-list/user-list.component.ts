import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserDto } from '../../../api/models';
import { UtenteService } from '../../../service/utente.service';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  rows: UserDto[];

  displayedColumns: string[] = ['identity', 'username', 'email',
  'bt1', 'bt2'];
  dataSource = null;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private route: Router, public dialog: MatDialog,
    private uService: UtenteService,
    private authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.uService.getUserList());
    this.uService.getUserList().subscribe(x=>{
      this.dataSource = new MatTableDataSource(x);
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

  openDialogDel(ana: UserDto) {
    const dialogRef = this.dialog.open(UserListDialog);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
      if (result){
        // console.log("funziona");        
        this.uService.delUser(ana);
        this.dataSource = this.uService.getUserList();
      }
    });
  }

  // openDialogRes() {
  //   const dialogRef = this.dialog.open(UserListDialog);

  //   dialogRef.afterClosed().subscribe(result => {
  //     // console.log(`Dialog result: ${result}`);
  //     if (result){
  //       // console.log("funziona");        
  //       this.uService.resetList();
  //       this.dataSource = this.uService.getUserList();
  //     }
  //   });
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  newUser() {
    this.route.navigateByUrl('user');
  }

  editUser(ana: UserDto) {
    // console.log(ana);
    this.route.navigateByUrl('user/' + ana.identity);
  }


}

@Component({
  selector: 'user-list-dialog',
  templateUrl: '../_dialog/delete-reset-dialog.html',
})
export class UserListDialog {

}
