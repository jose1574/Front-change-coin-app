import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-connection',
  templateUrl: './form-connection.component.html',
  styleUrls: ['./form-connection.component.css']
})
export class FormConnectionComponent implements OnInit {

  saveData() {
    alert('hola desde el servicio')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
