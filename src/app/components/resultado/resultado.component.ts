import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit{
  promedio:number= +window.localStorage.getItem('rtest');
  id:number= +window.localStorage.getItem('idHabito');
  resultado:string;
  contenido:string;
  color:string;
  constructor() {
    this.fill();
  }
  fill(){
      if(this.id == 1){
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
      }else if(this.id == 2){
        if(this.promedio >= 91){
        this.resultado="¡Excelente!";
        this.contenido='¡Felicitaciones! casi todos los aspectos de tu vida, con respecto a este hábito, son saludables. Solo unos pocos cambios y lograrás una vida aún más saludable. La frase "mente sana", cuerpo sano, es una gran realidad que ha sido comprobada científicamente. Alrededor del 80% de los problemas de salud son mentales. La "Actitud Positiva" se define como la elección de aprender a pensar en lo bueno y agradable de forma constructiva, objetiva y sana y expresarlo en las relaciones interpersonales. Para mantenerte saludable es determinante conservar una Actitud Positiva frente a todas las situaciones de la vida. Esta actitud conlleva a una salud física, mental, espiritual y social. ';
        this.color="#185417";
         }else  if(this.promedio < 91 && this.promedio >=81){
           this.resultado="¡Muy Bueno!";
           this.contenido='¡Muy bien!, muchos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar nuevos cambios que te acerquen a una vida más saludable. ¡Puedes hacerlo! La frase "mente sana", cuerpo sano, es una gran realidad que ha sido comprobada científicamente. Alrededor del 80% de los problemas de salud son mentales. La "Actitud Positiva" se define como la elección de aprender a pensar en lo bueno y agradable de forma constructiva, objetiva y sana y expresarlo en las relaciones interpersonales. Para mantenerte saludable es determinante conservar una Actitud Positiva frente a todas las situaciones de la vida. Esta actitud conlleva a una salud física, mental, espiritual y social.';
           this.color="#458f31";
         }else  if(this.promedio < 81 && this.promedio >=71){
           this.resultado="¡Bueno!";
           this.contenido='¡Bien! Algunos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar unos pocos cambios que te acerquen aún más a una vida más saludable. Puedes hacerlo, ¡Tú eres protagonista de tu vida! La frase "mente sana", cuerpo sano, es una gran realidad que ha sido comprobada científicamente. Alrededor del 80% de los problemas de salud son mentales. La "Actitud Positiva" se define como la elección de aprender a pensar en lo bueno y agradable de forma constructiva, objetiva y sana y expresarlo en las relaciones interpersonales. Para mantenerte saludable es determinante conservar una Actitud Positiva frente a todas las situaciones de la vida. Esta actitud conlleva a una salud física, mental, espiritual y social. ';
           this.color="#e1c206";
         }else  if(this.promedio < 71 && this.promedio >=61){
           this.resultado="¡Malo!";
           this.contenido='Estás un poco alejado de una vida saludable en este hábito. Revisa tu estilo de vida y haz cambios que te acerquen a una vida más saludable. Lo importante es que transformes tu realidad. Puedes hacerlo, ¡Tú eres protagonista de tu vida! La frase "mente sana", cuerpo sano, es una gran realidad que ha sido comprobada científicamente. Alrededor del 80% de los problemas de salud son mentales. La "Actitud Positiva" se define como la elección de aprender a pensar en lo bueno y agradable de forma constructiva, objetiva y sana y expresarlo en las relaciones interpersonales. Para mantenerte saludable es determinante conservar una Actitud Positiva frente a todas las situaciones de la vida. Esta actitud conlleva a una salud física, mental, espiritual y social.';
           this.color="#d54b00";
         }else if(this.promedio < 61 ){
           this.resultado="¡Muy Malo!";
           this.contenido='¡Es urgente que revises tu estilo de vida! Haz los cambios necesarios para lograr una vida saludable. Transforma tu realidad, ¡puedes lograrlo! La frase "mente sana", cuerpo sano, es una gran realidad que ha sido comprobada científicamente. Alrededor del 80% de los problemas de salud son mentales. La "Actitud Positiva" se define como la elección de aprender a pensar en lo bueno y agradable de forma constructiva, objetiva y sana y expresarlo en las relaciones interpersonales. Para mantenerte saludable es determinante conservar una Actitud Positiva frente a todas las situaciones de la vida. Esta actitud conlleva a una salud física, mental, espiritual y social. ';
           this.color="#c40404";
         }
      }else if(this.id == 3){
        if(this.promedio >= 91){
            this.resultado="¡Excelente!";
          this.contenido='¡Felicitaciones! casi todos los aspectos de tu vida, con respecto a este hábito, son saludables.  Solo unos pocos cambios y lograrás una vida aún más saludable. El hábito del "Bien Comer" es alimentarse de manera balanceada, integrando y combinando los diferentes grupos de alimentos, por medio de las correctas porciones y calorías, para puedas poseer un funcionamiento integral durante tu día. La alimentación se ha vuelto la pieza clave para el mantenimiento de la salud. "Que tu alimento sea tu medicina", Hipócrates. '; 
            this.color="#185417";
         }else  if(this.promedio < 91 && this.promedio >=81){
           
             this.resultado="¡Muy Bueno!";
           this.contenido='¡Muy bien! muchos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar nuevos cambios que te acerquen a una vida más saludable. ¡Puedes hacerlo!. El hábito del "Bien Comer" es alimentarse de manera balanceada, integrando y combinando los diferentes grupos de alimentos, por medio de las correctas porciones y calorías, para puedas poseer un funcionamiento integral durante tu día. La alimentación se ha vuelto la pieza clave para el mantenimiento de la salud. "Que tu alimento sea tu medicina", Hipócrates. '; 
          this.color="#458f31";
         }else  if(this.promedio < 81 && this.promedio >=71){
             this.resultado="¡Bueno!";
           this.contenido='¡Bien! algunos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar unos pocos cambios que te acerquen aún más a una vida más saludable. Puedes hacerlo. ¡Tú eres protagonista de tu vida!. El hábito del "Bien Comer" es alimentarse de manera balanceada, integrando y combinando los diferentes grupos de alimentos, por medio de las correctas porciones y calorías, para puedas poseer un funcionamiento integral durante tu día. La alimentación se ha vuelto la pieza clave para el mantenimiento de la salud. "Que tu alimento sea tu medicina", Hipócrates. '; 
          this.color="#e1c206";
         }else  if(this.promedio < 71 && this.promedio >=61){
           
             this.resultado="¡Malo!";
           this.contenido='Estás un poco alejado de una vida saludable en este hábito. Revisa tu estilo de vida y haz cambios que te acerquen a una vida más saludable. Lo importante es que transformes tu realidad. Puedes hacerlo. ¡Tú eres protagonista de tu vida! El hábito del "Bien Comer" es alimentarse de manera balanceada, integrando y combinando los diferentes grupos de alimentos, por medio de las correctas porciones y calorías, para puedas poseer un funcionamiento integral durante tu día. La alimentación se ha vuelto la pieza clave para el mantenimiento de la salud. "Que tu alimento sea tu medicina", Hipócrates. '; 
          this.color="#d54b00";
         }else if(this.promedio < 61 ){
           
             this.resultado="¡Muy Malo!";
           this.contenido='¡Es urgente que revises tu estilo de vida! Haz los cambios necesarios para lograr una vida saludable. Transforma tu realidad, ¡puedes lograrlo! El hábito del "Bien Comer" es alimentarse de manera balanceada, integrando y combinando los diferentes grupos de alimentos, por medio de las correctas porciones y calorías, para puedas poseer un funcionamiento integral durante tu día. La alimentación se ha vuelto la pieza clave para el mantenimiento de la salud. "Que tu alimento sea tu medicina", Hipócrates. '; 
          this.color="#c40404";
         }
      }else if(this.id == 4){
        if(this.promedio >= 91){
          
            this.resultado="¡Excelente!";
          this.contenido='¡Felicitaciones! casi todos los aspectos de tu vida, con respecto a este hábito, son saludables. Solo unos pocos cambios y lograrás una vida aún más saludable. La Actividad Física te ayuda a mejorar todas las dimensiones de tu salud. Es uno de los hábitos que, aunque te cueste adquirir, más puede impactar sobre tu salud. No debes de confundir la "Actividad Física" con el "ejercicio", el cual es incluido dentro de la misma, junto con las otras actividades que incluyen movimiento corporal y se realizan como parte de los momentos de juego, del trabajo, de formas de transporte activas, de las tareas domésticas y de actividades recreativas.';
          this.color="#185417";
         }else  if(this.promedio < 91 && this.promedio >=81){
           
             this.resultado="¡Muy Bueno!";
           this.contenido='¡Muy bien! muchos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar nuevos cambios que te acerquen a una vida más saludable. ¡Puedes hacerlo! La Actividad Física te ayuda a mejorar todas las dimensiones de tu salud. Es uno de los hábitos que, aunque te cueste adquirir, más puede impactar sobre tu salud. No debes de confundir la "Actividad Física" con el "ejercicio", el cual es incluido dentro de la misma, junto con las otras actividades que incluyen movimiento corporal y se realizan como parte de los momentos de juego, del trabajo, de formas de transporte activas, de las tareas domésticas y de actividades recreativas.';
           this.color="#458f31";
         }else  if(this.promedio < 81 && this.promedio >=71){
           
             this.resultado="¡Bueno!";
           this.contenido='¡Bien! algunos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar unos pocos cambios que te acerquen aún más a una vida más saludable. Puedes hacerlo. ¡Tú eres protagonista de tu vida! La Actividad Física te ayuda a mejorar todas las dimensiones de tu salud. Es uno de los hábitos que, aunque te cueste adquirir, más puede impactar sobre tu salud. No debes de confundir la "Actividad Física" con el "ejercicio", el cual es incluido dentro de la misma, junto con las otras actividades que incluyen movimiento corporal y se realizan como parte de los momentos de juego, del trabajo, de formas de transporte activas, de las tareas domésticas y de actividades recreativas.';
           this.color="#e1c206";
         }else  if(this.promedio < 71 && this.promedio >=61){
           
             this.resultado="¡Malo!";
           this.contenido='Estás un poco alejado de una vida saludable en este hábito. Revisa tu estilo de vida y haz cambios que te acerquen a una vida más saludable. Lo importante es que transformes tu realidad. Puedes hacerlo. ¡Tú eres protagonista de tu vida! La Actividad Física te ayuda a mejorar todas las dimensiones de tu salud. Es uno de los hábitos que, aunque te cueste adquirir, más puede impactar sobre tu salud. No debes de confundir la "Actividad Física" con el "ejercicio", el cual es incluido dentro de la misma, junto con las otras actividades que incluyen movimiento corporal y se realizan como parte de los momentos de juego, del trabajo, de formas de transporte activas, de las tareas domésticas y de actividades recreativas.';
           this.color="#d54b00";
         }else if(this.promedio < 61 ){
           
             this.resultado="¡Muy Malo!";
           this.contenido='¡Es urgente que revises tu estilo de vida! Haz los cambios necesarios para lograr una vida saludable. Transforma tu realidad, ¡puedes lograrlo! La Actividad Física te ayuda a mejorar todas las dimensiones de tu salud. Es uno de los hábitos que, aunque te cueste adquirir, más puede impactar sobre tu salud. No debes de confundir la "Actividad Física" con el "ejercicio", el cual es incluido dentro de la misma, junto con las otras actividades que incluyen movimiento corporal y se realizan como parte de los momentos de juego, del trabajo, de formas de transporte activas, de las tareas domésticas y de actividades recreativas.';
           this.color="#c40404";
         }
      }else if(this.id == 5){
        if(this.promedio >= 91){
          
            this.resultado="¡Excelente!";
          this.contenido='¡Felicitaciones! casi todos los aspectos de tu vida, con respecto a este hábito, son saludables. Solo unos pocos cambios y lograrás una vida aún más saludable. El hábito de un "Descanso Adecuado" es el estado momentáneo de reposo, tranquilidad o inactividad, que se realiza en medio del trabajo o de otra actividad para reponer fuerzas físicas, mentales y espirituales. Así como el sueño para reparar el organismo. No tener un Descanso Adecuado puede perjudicar tu salud física, tu estado emocional y tu productividad.  ';
    ;        
          this.color="#185417";
         }else  if(this.promedio < 91 && this.promedio >=81){
           
             this.resultado="¡Muy Bueno!";
           this.contenido='¡Muy bien! muchos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar nuevos cambios que te acerquen a una vida más saludable. ¡Puedes hacerlo!. El hábito de un "Descanso Adecuado" es el estado momentáneo de reposo, tranquilidad o inactividad, que se realiza en medio del trabajo o de otra actividad para reponer fuerzas físicas, mentales y espirituales. Así como el sueño para reparar el organismo. No tener un Descanso Adecuado puede perjudicar tu salud física, tu estado emocional y tu productividad.  ';
           
           this.color="#458f31";
         }else  if(this.promedio < 81 && this.promedio >=71){
           
             this.resultado="¡Bueno!";
           this.contenido='¡Bien! algunos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar unos pocos cambios que te acerquen aún más a una vida más saludable. Puedes hacerlo. ¡Tú eres protagonista de tu vida!. El hábito de un "Descanso Adecuado" es el estado momentáneo de reposo, tranquilidad o inactividad, que se realiza en medio del trabajo o de otra actividad para reponer fuerzas físicas, mentales y espirituales. Así como el sueño para reparar el organismo. No tener un Descanso Adecuado puede perjudicar tu salud física, tu estado emocional y tu productividad.  ';
           
           this.color="#e1c206";
         }else  if(this.promedio < 71 && this.promedio >=61){
           
             this.resultado="¡Malo!";
           this.contenido='Estás un poco alejado de una vida saludable en este hábito. Revisa tu estilo de vida y haz cambios que te acerquen a una vida más saludable. Lo importante es que transformes tu realidad. Puedes hacerlo. ¡Tú eres protagonista de tu vida! El hábito de un "Descanso Adecuado" es el estado momentáneo de reposo, tranquilidad o inactividad, que se realiza en medio del trabajo o de otra actividad para reponer fuerzas físicas, mentales y espirituales. Así como el sueño para reparar el organismo. No tener un Descanso Adecuado puede perjudicar tu salud física, tu estado emocional y tu productividad.  ';
           
           this.color="#d54b00";
         }else if(this.promedio < 61 ){
           
             this.resultado="¡Muy Malo!";
           this.contenido='¡Es urgente que revises tu estilo de vida! Haz los cambios necesarios para lograr una vida saludable. Transforma tu realidad, ¡puedes lograrlo!. El hábito de un "Descanso Adecuado" es el estado momentáneo de reposo, tranquilidad o inactividad, que se realiza en medio del trabajo o de otra actividad para reponer fuerzas físicas, mentales y espirituales. Así como el sueño para reparar el organismo. No tener un Descanso Adecuado puede perjudicar tu salud física, tu estado emocional y tu productividad.  ';
           
           this.color="#c40404";
         }
      }else if(this.id == 6){
        if(this.promedio >= 91){
          
            this.resultado="¡Excelente!",
             this.contenido='¡Felicitaciones! casi todos los aspectos de tu vida, con respecto a este hábito, son saludables.  Solo unos pocos cambios y lograrás una vida aún más saludable. El "Auto-control" es ejercer el dominio propio y la fuerza de voluntad para evitar lo nocivo y hacer uso correcto de lo beneficioso. Debes tener auto-control con los alimentos, las bebidas, el tiempo, el dinero, los recursos, y hasta con el medio ambiente; asimismo, evitar cualquier tipo de adicciones. Practicar este hábito de “Auto-control” te ayudará a mantener una mente clara y alerta y un cuerpo saludable. ';
             this.color="#185417";
         }else  if(this.promedio < 91 && this.promedio >=81){
           
             this.resultado="¡Muy Bueno!",
           this.contenido='¡Muy bien! muchos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar nuevos cambios que te acerquen a una vida más saludable. ¡Puedes hacerlo!. El "Auto-control" es ejercer el dominio propio y la fuerza de voluntad para evitar lo nocivo y hacer uso correcto de lo beneficioso. Debes tener auto-control con los alimentos, las bebidas, el tiempo, el dinero, los recursos, y hasta con el medio ambiente; asimismo, evitar cualquier tipo de adicciones. Practicar este hábito de “Auto-control” te ayudará a mantener una mente clara y alerta y un cuerpo saludable.';
           this.color="#458f31";
         }else  if(this.promedio < 81 && this.promedio >=71){
           
             this.resultado="¡Bueno!",
           this.contenido='¡Bien! algunos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar unos pocos cambios que te acerquen aún más a una vida más saludable. Puedes hacerlo. ¡Tú eres protagonista de tu vida!. El "Auto-control" es ejercer el dominio propio y la fuerza de voluntad para evitar lo nocivo y hacer uso correcto de lo beneficioso. Debes tener auto-control con los alimentos, las bebidas, el tiempo, el dinero, los recursos, y hasta con el medio ambiente; asimismo, evitar cualquier tipo de adicciones. Practicar este hábito de “Auto-control” te ayudará a mantener una mente clara y alerta y un cuerpo saludable.  ';
           this.color="#e1c206";
         }else  if(this.promedio < 71 && this.promedio >=61){
           
             this.resultado="¡Malo!",
           this.contenido='Estás un poco alejado de una vida saludable en este hábito. Revisa tu estilo de vida y haz cambios que te acerquen a una vida más saludable. Lo importante es que transformes tu realidad. Puedes hacerlo. ¡Tú eres protagonista de tu vida! El "Auto-control" es ejercer el dominio propio y la fuerza de voluntad para evitar lo nocivo y hacer uso correcto de lo beneficioso. Debes tener auto-control con los alimentos, las bebidas, el tiempo, el dinero, los recursos, y hasta con el medio ambiente; asimismo, evitar cualquier tipo de adicciones. Practicar este hábito de “Auto-control” te ayudará a mantener una mente clara y alerta y un cuerpo saludable.';
           this.color="#d54b00";
         }else if(this.promedio < 61 ){
           
             this.resultado="¡Muy Malo!",
           this.contenido='¡Es urgente que revises tu estilo de vida! Haz los cambios necesarios para lograr una vida saludable. Transforma tu realidad, ¡puedes lograrlo! El "Auto-control" es ejercer el dominio propio y la fuerza de voluntad para evitar lo nocivo y hacer uso correcto de lo beneficioso. Debes tener auto-control con los alimentos, las bebidas, el tiempo, el dinero, los recursos, y hasta con el medio ambiente; asimismo, evitar cualquier tipo de adicciones. Practicar este hábito de “Auto-control” te ayudará a mantener una mente clara y alerta y un cuerpo saludable. ';
           this.color="#c40404";
         }
      }else if(this.id == 7){
        if(this.promedio >= 91){
            this.resultado="¡Excelente!";
             this.contenido='¡Felicitaciones! casi todos los aspectos de tu vida, con respecto a este hábito, son saludables.  Solo unos pocos cambios y lograrás una vida aún más saludable.  El hábito de "Desayunar Más y Cenar Menos" le da al desayuno nutritivo la prioridad e importancia que merece. Al practicarlo puedes lograr un mejor desarrollo y rendimiento integral de tu organismo y reducir la ingesta alimenticia de la cena. Recuerda que debes de desayunar como rey, comer como príncipe y cenar como mendigo. ';
             
             this.color="#185417";
         }else  if(this.promedio < 91 && this.promedio >=81){
    
             this.resultado="¡Muy Bueno!";
           this.contenido='¡Muy bien! muchos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar nuevos cambios que te acerquen a una vida más saludable. ¡Puedes hacerlo! El hábito de "Desayunar Más y Cenar Menos" le da al desayuno nutritivo la prioridad e importancia que merece. Al practicarlo puedes lograr un mejor desarrollo y rendimiento integral de tu organismo y reducir la ingesta alimenticia de la cena. Recuerda que debes de desayunar como rey, comer como príncipe y cenar como mendigo. ';
           
           this.color="#458f31";
         }else  if(this.promedio < 81 && this.promedio >=71){
    
             this.resultado="¡Bueno!";
           this.contenido='¡Bien! algunos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar unos pocos cambios que te acerquen aún más a una vida más saludable. Puedes hacerlo. ¡Tú eres protagonista de tu vida! El hábito de "Desayunar Más y Cenar Menos" le da al desayuno nutritivo la prioridad e importancia que merece. Al practicarlo puedes lograr un mejor desarrollo y rendimiento integral de tu organismo y reducir la ingesta alimenticia de la cena. Recuerda que debes de desayunar como rey, comer como príncipe y cenar como mendigo. ';
           
           this.color="#e1c206";
         }else  if(this.promedio < 71 && this.promedio >=61){
    
             this.resultado="¡Malo!";
           this.contenido='Estás un poco alejado de una vida saludable en este hábito. Revisa tu estilo de vida y haz cambios que te acerquen a una vida más saludable. Lo importante es que transformes tu realidad. Puedes hacerlo. ¡Tú eres protagonista de tu vida! El hábito de "Desayunar Más y Cenar Menos" le da al desayuno nutritivo la prioridad e importancia que merece. Al practicarlo puedes lograr un mejor desarrollo y rendimiento integral de tu organismo y reducir la ingesta alimenticia de la cena. Recuerda que debes de desayunar como rey, comer como príncipe y cenar como mendigo. ';
           
           this.color="#d54b00";
         }else if(this.promedio < 61 ){
    
             this.resultado="¡Muy Malo!";
           this.contenido='¡Es urgente que revises tu estilo de vida! Haz los cambios necesarios para lograr una vida saludable. Transforma tu realidad, ¡puedes lograrlo! El hábito de "Desayunar Más y Cenar Menos" le da al desayuno nutritivo la prioridad e importancia que merece. Al practicarlo puedes lograr un mejor desarrollo y rendimiento integral de tu organismo y reducir la ingesta alimenticia de la cena. Recuerda que debes de desayunar como rey, comer como príncipe y cenar como mendigo. ';
           
           this.color="#c40404";
         }
      }else if(this.id == 8){
        if(this.promedio >= 91){
          
            this.resultado="¡Excelente!";
             this.contenido='¡Felicitaciones! casi todos los aspectos de tu vida, con respecto a este hábito, son saludables. Solo unos pocos cambios y lograrás una vida aún más saludable.  El hábito de "Ser Feliz" se define como un estado de armonía con Dios el Creador que proporciona gozo, paz, realización y que se obtiene por medio de una plena confianza y esperanza en Él, al servicio de los demás. Tú estilo de vida saludable se completa practicando este hábito. La felicidad es importante para el bienestar de tu cuerpo. La salud integral (física, mental, espiritual y social) se ve vinculada con la felicidad. ';
             this.color="#185417";
         }else  if(this.promedio < 91 && this.promedio >=81){
           
             this.resultado="¡Muy Bueno!";
           this.contenido='¡Muy bien! muchos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar nuevos cambios que te acerquen a una vida más saludable. ¡Puedes hacerlo! El hábito de "Ser Feliz" se define como un estado de armonía con Dios el Creador que proporciona gozo, paz, realización y que se obtiene por medio de una plena confianza y esperanza en Él, al servicio de los demás.  Tú estilo de vida saludable se completa practicando este hábito. La felicidad es importante para el bienestar de tu cuerpo. La salud integral (física, mental, espiritual y social) se ve vinculada con la felicidad. ';
           this.color="#458f31";
         }else  if(this.promedio < 81 && this.promedio >=71){
           
             this.resultado="¡Bueno!";
           this.contenido='¡Bien! algunos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar unos pocos cambios que te acerquen aún más a una vida más saludable. Puedes hacerlo. ¡Tú eres protagonista de tu vida! El hábito de "Ser Feliz" se define como un estado de armonía con Dios el Creador que proporciona gozo, paz, realización y que se obtiene por medio de una plena confianza y esperanza en Él, al servicio de los demás. Tú estilo de vida saludable se completa practicando este hábito. La felicidad es importante para el bienestar de tu cuerpo. La salud integral (física, mental, espiritual y social) se ve vinculada con la felicidad. ';
           this.color="#e1c206";
         }else  if(this.promedio < 71 && this.promedio >=61){
           
             this.resultado="¡Malo!";
           this.contenido='Estás un poco alejado de una vida saludable en este hábito. Revisa tu estilo de vida y haz cambios que te acerquen a una vida más saludable. Lo importante es que transformes tu realidad. Puedes hacerlo. ¡Tú eres protagonista de tu vida! El hábito de "Ser Feliz" se define como un estado de armonía con Dios el Creador que proporciona gozo, paz, realización y que se obtiene por medio de una plena confianza y esperanza en Él, al servicio de los demás.  Tú estilo de vida saludable se completa practicando este hábito. La felicidad es importante para el bienestar de tu cuerpo. La salud integral (física, mental, espiritual y social) se ve vinculada con la felicidad. ';
           this.color="#d54b00";
         }else if(this.promedio < 61 ){
           
             this.resultado="¡Muy Malo!";
           this.contenido='¡Es urgente que revises tu estilo de vida! Haz los cambios necesarios para lograr una vida saludable. Transforma tu realidad, ¡puedes lograrlo! El hábito de "Ser Feliz" se define como un estado de armonía con Dios el Creador que proporciona gozo, paz, realización y que se obtiene por medio de una plena confianza y esperanza en Él, al servicio de los demás. Tú estilo de vida saludable se completa practicando este hábito. La felicidad es importante para el bienestar de tu cuerpo. La salud integral (física, mental, espiritual y social) se ve vinculada con la felicidad. ';
           this.color="#c40404";
         }
      }
    }
  
  ngOnInit(){}
}
