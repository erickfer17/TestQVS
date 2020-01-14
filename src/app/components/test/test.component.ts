import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Consulta } from '../../models/consultahabito';
import { RestService } from '../../services/rest.service';
import { Preguntas } from '../../models/preguntas'

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
  constructor(private route:ActivatedRoute, private rest:RestService,private router:Router) {
    this.i=0;
    this.resultado=0;
    this.aux=0;
    this.aux2=0;
    this.rtest=0;
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
    var id = +this.route.snapshot.paramMap.get('id');
    this.consulta.id=id;
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
          this.resultado=this.resultado-this.i;
          this.aux=(this.i*5)-this.i;
          this.aux2=(this.resultado/this.aux);
          this.rtest=this.aux2*100;
          window.localStorage.setItem('rtest',this.rtest.toString());
          this.router.navigate(['/resultado']);

        }
  
}
