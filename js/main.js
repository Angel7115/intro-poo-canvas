//CODIGO DE LA 3.1 
const canvasR = document.getElementById("canvasRectangulo");
const canvasT = document.getElementById("canvasTriangulo");
const canvasPluma = document.getElementById("canvasPluma");
const canvasPOO = document.getElementById("canvasPOO");


function drawRectangulo() {
    if (canvasR.getContext) {
      const ctx = canvasR.getContext("2d");
      ctx.fillRect(25, 25, 100, 100);  // 
      ctx.clearRect(45, 45, 60, 60);   
      ctx.strokeRect(50, 50, 50, 50);
    }
  }

  function drawTriangulo() {
    if (canvasT.getContext) {
      const ctx = canvasT.getContext("2d");
      ctx.fillStyle = "blue";
      ctx.beginPath();
      ctx.moveTo(25, 100);
      ctx.lineTo(125, 100);
      ctx.lineTo(75, 20);
      ctx.fill();
    }
  }
  
  function drawPluma() {
    if (canvasPluma.getContext) {
      const ctx = canvasPluma.getContext("2d");
      ctx.fillStyle = "Yellow";
      ctx.strokeStyle = "Black";
      ctx.beginPath();
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Círculo externo
      ctx.moveTo(110, 75);
      ctx.arc(75, 75, 35, 0, Math.PI, false); // Boca (en el sentido de las agujas del reloj)
      ctx.moveTo(65, 65);
      ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Ojo izquierdo
      ctx.moveTo(95, 65);
      ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Ojo derecho
      ctx.stroke();
    }
  }


  drawRectangulo();
  drawTriangulo();
  drawPluma();


//---------------------------------------- CODIGO DE 3.2 


const ctx = canvasPOO.getContext("2d");


const window_height = "200" //window.innerHeight;

const window_width = "300"//window.innerWidth;


canvasPOO.height = window_height;
canvasPOO.width = window_width;
canvasPOO.style.background = "#fff2cc";


class Circle {      //CARGA LOS VALORES PREDETERMINADOS DEL OBJETO
  constructor(x, y, radius, color, text) { //PARAMETROS RECIBIDOS POR MIS OBJETOS 
    this.posX = x;
    this.posY = y;
    this.radius = radius;
    this.color = color;
    this.text = text;
  }

  //METODO PARA RENDERIZAR (DIBUJAR) EL OBJETO 
  draw(context) {
    context.beginPath();
    context.strokeStyle = this.color;   //para la propiedad de color
    context.textAlign = "center" ;      // para la propiedad de alineacion, en este caso el centro
    //Si no le digo que se Centre, el objeto de "TEC" apareceria con la esquina superior izquierda en el punto origen, en lugar de su propio centro
    context.textBaseline="middle";
    context.font = "20px Arial";        //para la propiedad de fuente de texto
    context.fillText(this.text,this.posX, this.posY);   //el Texto que dibujare en las cordenada X y Y
    context.lineWidth=2;            //PROPIEDAD DE ANCHO DE LINEA
    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false); //Dibujo del "Circulo" en base a sus posX,Y //LINEA BASE
    //context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false); //Dibujo del "Circulo" en base a sus posX,Y            //LINEA PRUEBAS

    // los parametros de arc son : (posX, PosY, Radio, Angulo inicio, Angulo en que termina, y Sentido Horario///// (True Antihorario o False =Horario)////////
    // El ángulo en el que se inicia el arco medido en sentido horario desde el eje x positivo y expresado en radianes, 
    // Math.PI es El ángulo en el que termina el arco, medido en sentido horario desde el eje x positivo y expresado en radianes.)

    //Un Boolean opcional que, si es true , hace que el arco se dibuje en sentido contrario a las agujas del reloj entre los dos ángulos. De forma predeterminada, se dibuja en el sentido de las agujas del reloj.
    context.stroke();
    context.closePath();

  }//FIN FUNCION draw

}
let randomX =  Math.random()* canvasPOO.width ;

    let randomY =  Math.random()* canvasPOO.height;

    let randomRadius = Math.floor(Math.random()*100 + 31);




let miCirculo = new Circle(randomX, randomY, randomRadius, 'red', 'Tec');
let miCirculo2 = new Circle(window_height/2, window_width/2, 99, 'BLUE', 'Tec');



miCirculo.draw(ctx);
miCirculo2.draw(ctx);

