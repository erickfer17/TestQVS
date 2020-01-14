import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {
  promedio:number= +window.localStorage.getItem('rtest');
  resultado:string;
  contenido:string;
  color:string;
  constructor() {

    if(this.promedio >= 91){
      this.resultado = "¡Excelente!";
      this.color = "#185417";
      this.contenido ="¡Felicitaciones! casi todos los aspectos de tu vida, con respecto a este hábito, son saludables. Solo unos pocos cambios y lograrás una vida aún más saludable. El hábito de Beber Agua Natural te ayudará a mantenerte bien hidratado durante el día. La mayor parte de nuestro peso es agua y es vital para que nuestro organismo funcione de la mejor manera. Adquirir y mantener este Hábito Saludable beneficiará a tu cuerpo en todas sus dimensiones (física, mental, social y espiritual).";
    }else  if(this.promedio < 91 && this.promedio >=81){
      this.resultado = "¡Muy Bueno!";
      this.color = "#458f31"; 
      this.contenido ="¡Muy bien! muchos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar nuevos cambios que te acerquen a una vida más saludable. ¡Puedes hacerlo! El hábito de Beber Agua Natural te ayudará a mantenerte bien hidratado durante el día. La mayor parte de nuestro peso es agua y es vital para que nuestro organismo funcione de la mejor manera. Adquirir y mantener este Hábito Saludable beneficiará a tu cuerpo en todas sus dimensiones (física, mental, social y espiritual). ";
    }else  if(this.promedio < 81 && this.promedio >=71){
      this.resultado = "¡Bueno!";
      this.color = "#e1c206";
      this.contenido ="¡Bien! algunos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar unos pocos cambios que te acerquen aún más a una vida más saludable. Puedes hacerlo. ¡Tú eres protagonista de tu vida!. El hábito de Beber Agua Natural te ayudará a mantenerte bien hidratado durante el día. La mayor parte de nuestro peso es agua y es vital para que nuestro organismo funcione de la mejor manera. Adquirir y mantener este Hábito Saludable beneficiará a tu cuerpo en todas sus dimensiones (física, mental, social y espiritual).";
    }else  if(this.promedio < 71 && this.promedio >=61){
      this.resultado = "¡Malo!";
      this.color = "#d54b00";
      this.contenido ="Estás un poco alejado de una vida saludable en este hábito. Revisa tu estilo de vida y haz cambios que te acerquen a una vida más saludable. Lo importante es que transformes tu realidad. Puedes hacerlo. ¡Tú eres protagonista de tu vida! El hábito de Beber Agua Natural te ayudará a mantenerte bien hidratado durante el día. La mayor parte de nuestro peso es agua y es vital para que nuestro organismo funcione de la mejor manera. Adquirir y mantener este Hábito Saludable beneficiará a tu cuerpo en todas sus dimensiones (física, mental, social y espiritual).";
    }else  if(this.promedio < 61 ){
      this.resultado = "¡Muy Malo!";
      this.color = "#c40404";
      this.contenido ="¡Es urgente que revises tu estilo de vida! Haz los cambios necesarios para lograr una vida saludable. Transforma tu realidad, ¡puedes lograrlo! El hábito de Beber Agua Natural te ayudará a mantenerte bien hidratado durante el día. La mayor parte de nuestro peso es agua y es vital para que nuestro organismo funcione de la mejor manera. Adquirir y mantener este Hábito Saludable beneficiará a tu cuerpo en todas sus dimensiones (física, mental, social y espiritual).";
    }
  }

  ngOnInit() {
  }

}
