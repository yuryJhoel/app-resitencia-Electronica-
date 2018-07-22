// Arrays
var cinta = [["plata","oro","negro","cafe","rojo","naranja","amarillo","verde","azul","violeta","gris","blanco"],[0.01,0.1,0,1,2,3,4,5,6,7,8,9]],
    list_tolerancia = [["cafe","rojo","amarillo","verde","azul","violeta","dorado","plata"],[.01,.02,.04,.005,.0025,.0010,.05,.10]];

// datos de HTML
        document.getElementById('btn').addEventListener("click",function() {
        var valor1 = document.getElementById('valor1').value,
            valor2 = document.getElementById('valor2').value,
            valor3 = document.getElementById('valor3').value;
            valor4 = document.getElementById('valor4').value;
            toler = document.getElementById('toler').value;

            // evaluar
        var num1 = num_color(valor1,cinta),
            num2 = num_color(valor2,cinta),
            num3 = num_color(valor3,cinta),
            num4 = num_color(valor4,cinta),
            toler = num_color(toler,list_tolerancia);
            

            

        var mult = Math.pow(10,num4);
            num1 = num1.toString();
            num2 = num2.toString();
            num3 = num3.toString();
            numamult = num1 + num2 + num3 ;
        var numamult = parseInt(numamult);
        var resistencia =  numamult * mult,
            tolerancia = resistencia * toler,
            val_max = resistencia + tolerancia,
            val_min = resistencia - tolerancia;

            // console.log(numamult);
/*
            console.log("Mi resistencia es: " + resistencia + " Homios");
            console.log("Mi tolerancia es: " + '+/-' + tolerancia + " Homios");
            console.log("El valor máximo es: " +  val_max + " Homios");
            console.log("El valor mínimo es: " +  val_min + " Homios");
*/
// formulas
        var form_resistencia = document.getElementById('form_resistencia'),
            form_tolerancia = document.getElementById('form_tolerancia'),
            form_vmax = document.getElementById('form_vmax'),
            form_vmin = document.getElementById('form_vmin');

            form_resistencia.innerHTML = "R = cinta1 x cinta2 x cinta3 x cinta4";
            form_tolerancia.innerHTML = "T = R x cinta de tolerancia(%)"
            form_vmax.innerHTML = "Vmax = R + T(tolerancia)"
            form_vmin.innerHTML = "Vmin = R - T(tolerancia)"

            

// calculos
            var resistencia_dom = document.getElementById('resistencia'),
                tolerancia_dom = document.getElementById('tolerancia'),
                vmax_dom = document.getElementById('v_max'),
                vmin_dom = document.getElementById('v_min');
            resistencia_dom.innerHTML = "R = "+ num1 + " x " + num2 + " x " + num3 + " x " +"10<sup>"+ num4 +"</sup>"+"<br>"+ "R = " + resistencia + " Homios";
            tolerancia_dom.innerHTML = "T = " + resistencia + " x " + toler*100 + "%" + "<br>T = +/- "+ tolerancia+ " Homios";
            vmax_dom.innerHTML = "Vmax = " + resistencia + " + " + tolerancia + "<br>" + "Vmax = " + val_max + " Homios" ;
            vmin_dom.innerHTML = "Vmin = " + resistencia + " - " + tolerancia + "<br>" + "Vmin = " + val_min + " Homios" ;
            
// show
            document.querySelector('#two_window').style.display = "block";
    });


// funcion encotrar valor de color
function num_color(valor, array) {
    for( var i = 0; i<array[0].length;i++ ) {
        if(array[0][i] == valor ){
            var num = array[1][i];
        }
    }
    return num;
}

