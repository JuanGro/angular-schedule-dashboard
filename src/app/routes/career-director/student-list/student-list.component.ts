import { Component, OnInit } from '@angular/core';
import { User } from './../../general-user/user-model';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  public studentList: User[];

  /**
   * Settings for the ng2-smart-table that contains the student list
   */
  settings = {
    actions: false,
    columns: {
      id_college: {
        title: 'Matrícula',
        editable: false
      },
      name: {
        title: 'Nombre'
      },
      last_name: {
        title: 'Apellido'
      },
      schedule_status: {
        title: 'Estado de horario'
      }
    }
  };

  constructor() { }

  ngOnInit() {
    this.studentList = [
      { id_college: 'A01207672', name: 'Juan Manuel', last_name: 'Guerrero Hernández', schedule_status: 'No revisado'}
    ];
  }

}
