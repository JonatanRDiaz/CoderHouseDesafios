//PROGRAMA EN ARCHIVO JAVASCRIPT 


//Este primer ejemplo es para que la entrada devuelva una validación del día y un mensaje adicional

var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];


for (var i = 0; i < 7; i++) {

    if (i === 6) {
        alert(
            "Hoy es: " + diasSemana[i] + " se feliz")
    }

    if (i % 2 == 0) {
        console.log(diasSemana[i])
    }



}



//Este segundo ejemplo lo hice para válidar los integrantes de familia. Ricardo es el mayor quien tiene 50 años, Andrea 45 años, Jonatan (yo) 31 años, Emilse mi pareja 31 años tambíen (unos meses menor), y Nazarena mi hermana de 20 años.



var miFamily = ["Ricardo", "Andrea", "Jonatan", "Emilse", "Nazarena"];

for (var i = 0; i < 5; i++) {
    if (i == 0) {
        alert(
            "El mayor de la flia es: " + miFamily[i])
    }

    if (i == 2) {
        console.log("La persona del medio es: " + (miFamily[i]))
    }


    if (i == 4) {
        alert(
            "El menor de la flia es: " + (miFamily[i])
        )
    }

}




