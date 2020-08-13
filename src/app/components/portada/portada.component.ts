import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss']
})
export class PortadaComponent implements OnInit {
  @Input() idTest:string;
  constructor() { }
  
  ngOnInit() {
    console.log(this.idTest);
    

  }

}
