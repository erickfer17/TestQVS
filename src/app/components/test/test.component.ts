import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Consulta } from '../../models/consultahabito';
import { RestService } from '../../services/rest.service';
import { Preguntas } from '../../models/preguntas'
import { PortadaComponent } from '../portada/portada.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  consulta = new Consulta();
  preguntas:Preguntas[];
  i:number;
  pregunta:string;
  img:string;
  resultado:number;
  tope:number;
  valor:number;
  aux:number;
  aux2:number;
  rtest:number;
  show:boolean = true;
  show2:boolean = false;
  constructor(private route:ActivatedRoute, private rest:RestService,private router:Router) {
    this.i=0;
    this.resultado=0;
    this.aux=0;
    this.aux2=0;
    this.rtest=0;
    window.setTimeout(()=>this.show=false,10000);
    window.setTimeout(() => this.show2=true,5000);
   }

   getPreguntas() {
    this.rest.alta(this.consulta).subscribe(datos => {
      this.preguntas=datos;
      this.pregunta=this.preguntas[this.i].pregunta;
      this.img=this.preguntas[this.i].img;
      this.tope=this.preguntas.length;
    });
  }


  ngOnInit() {
    var test = this.route.snapshot.paramMap.get('test');
    if(test == "beber-agua-natural"){
      this.consulta.id = 1;
    }else if(test == "actitud-positiva"){
      this.consulta.id = 2;
    }else if(test == "bien-comer"){
      this.consulta.id = 3;
    }else if(test == "actividad-fisica"){
      this.consulta.id = 4;
    }else if(test == "descanso-adecuado"){
      this.consulta.id = 5;
    }else if(test == "auto-control"){
      this.consulta.id = 6;
    }else if(test == "desayunar-mas-cenar-menos"){
      this.consulta.id = 7;
    }else if(test == "ser-feliz"){
      this.consulta.id = 8
    }
    this.consulta.registro='preguntas';
    this.getPreguntas();
    
  }

  
    No(){
      this.valor= +this.preguntas[this.i].no;       
         this.resultado=this.resultado + this.valor;
          this.i=this.i+1;
          if(this.i<this.tope){
          this.pregunta=this.preguntas[this.i].pregunta;
          this.img=this.preguntas[this.i].img;
          }else{
            this.goToResult();
          }
      }
      
      Rara(){
        this.valor= +this.preguntas[this.i].rara;       
        this.resultado=this.resultado + this.valor;
         this.i=this.i+1;
         if(this.i<this.tope){
         this.pregunta=this.preguntas[this.i].pregunta;
         this.img=this.preguntas[this.i].img;
         }else{
           this.goToResult();
         }
      }
    
      Aveces(){
      
          this.valor= +this.preguntas[this.i].aveces;       
         this.resultado=this.resultado + this.valor;
          this.i=this.i+1;
          if(this.i<this.tope){
          this.pregunta=this.preguntas[this.i].pregunta;
          this.img=this.preguntas[this.i].img;
          }else{
            this.goToResult();
          }
          
        
      }
    
      Frecuentemente(){
        this.valor= +this.preguntas[this.i].frecuentemente;       
         this.resultado=this.resultado + this.valor;
          this.i=this.i+1;
          if(this.i<this.tope){
          this.pregunta=this.preguntas[this.i].pregunta;
          this.img=this.preguntas[this.i].img;
          }else{
            this.goToResult();
          }
      }
    
      Si(){
        this.valor= +this.preguntas[this.i].si;       
         this.resultado=this.resultado + this.valor;
          this.i=this.i+1;
          if(this.i<this.tope){
          this.pregunta=this.preguntas[this.i].pregunta;
          this.img=this.preguntas[this.i].img;
          
          }else{
            this.goToResult();
          }
        }


        goToResult(){
          var test = this.route.snapshot.paramMap.get('test');
          this.resultado=this.resultado-this.i;
          this.aux=(this.i*5)-this.i;
          this.aux2=(this.resultado/this.aux);
          this.rtest=this.aux2*100;
          window.localStorage.setItem('rtest',this.rtest.toString());
          window.localStorage.setItem('idHabito',this.consulta.id.toString());
          this.router.navigate(['/'+test+'/resultado']);
        }
}