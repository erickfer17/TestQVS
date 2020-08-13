import { Component, OnInit } from '@angular/core';

import { Habito } from '../../models/habito';
import { Consulta } from '../../models/consultahabito';
import { RestService } from '../../services/rest.service';
 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  habitos:Habito[];
  habito = new Consulta();
  constructor(public rest:RestService) {
    
   }

    getHabitos() {
      this.rest.alta(this.habito).subscribe(datos => {
        this.habitos=datos;
        console.log(this.habitos); 
        
      });
    }
  ngOnInit() {
    this.habito.registro="consultatests";
    this.getHabitos();
  }

}
