import { Component } from '@angular/core';
//import {TableDataComponent} from './table-data/table-data.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tablelist =[];
  newRow = new TableRow('','','');
  selectedRow=null;
  initTableList(){
    this.tablelist.push(new TableRow('Amit','NJ','100k'));
  }
  addNewRow(){
    if(this.newRow.name!=''){
    this.tablelist.push(this.newRow);
    this.newRow = new TableRow('','','')
    }
  }
  deleteRow(rowIndex){
    this.tablelist.splice(rowIndex,1)
  }
  selectRow(row){
  this.selectedRow = row;
  }
  ngOnInit(){
    this.initTableList();
  }
}


class TableRow {
name;
address;
salary;
colorCode;

constructor(name,add,salary){
  this.name= name;
  this.address=add;
  this.salary =salary;
  this.colorCode;
}
}

class JWPlayer{
  playerObject;

  constructor(){
    
  }
}