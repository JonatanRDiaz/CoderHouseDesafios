/* Alumno Jonatan Diaz Camada 14170 */





/* 
Es este primer ejemplo, hice una funcion que resuelva la siguiente problematica:
El usuario ingresa los montos de 5 familias de productos que compró, se suman los precios y devuelve por pantalla el valor
total de su compra. Si el valor final es mayor a 5.000 PesosArgentinos la compra es mayorista. Si la compra es mayorista tiene un 10% de descuento, y permite hacer el pago en 6 cuotas. Por medio de un alert, se informan cual es el monto de descuento al que aplica, y los precios finales de las 3 cuotas.
Si la compra es menor a 5000 pesos, pasa a ser de tipo minorista, y no aplica descuento, solo puede pagar en 3 cuotas. Mediante un alert, quiero mostrar el precio total de la compra y el valor de las cuotas. */




var primerMonto;
var segundoMonto;
var tercerMonto;
var cuartoMonto;
var quintoMonto;
var montoParcial;
var montoTotalCompra;
var clienteMayorista;
var clienteMinorista;
var montoConDescuento;
var valorCuotaMayorista;
var valorCuotaMinorista;


var primerMonto = parseInt(prompt("Ingrese el monto del primer artículo"));
var segundoMonto = parseInt(prompt("Ingrese el monto del segundo artículo"));
var tercerMonto = parseInt(prompt("Ingrese el monto del tercer artículo"));
var cuartoMonto = parseInt(prompt("Ingrese el monto del cuarto artículo"));
var quintoMonto = parseInt(prompt("Ingrese el monto del quinto artículo"));


sumar (primerMonto, segundoMonto, tercerMonto, cuartoMonto, quintoMonto)


function sumar(a, b, c, d, e) {
    return  montoTotalCompra = primerMonto + segundoMonto + tercerMonto + cuartoMonto + quintoMonto;
}
 
alert ("El monto de su compra es " + montoTotalCompra);


if( montoTotalCompra >= 5000 ){
    alert("Su compra es mayorista");
    alert("Para compras mayoristas, aplicar 10% de descuento");
    montoConDescuento = montoTotalCompra - (montoTotalCompra * 0.10);
    alert("Su monto a pagar es de " + (montoConDescuento));
    valorCuotaMayorista = montoConDescuento / 6;
    alert("Puede pagar su compra en 6 cuotas sin interés de " + valorCuotaMayorista.toFixed(2));


}else if (montoTotalCompra < 5000) {
    alert("Su compra es minorista");
    valorCuotaMinorista = montoTotalCompra / 3;
    alert("Puede pagar su compra en 3 cuotas sin interés de " + valorCuotaMinorista.toFixed(2));
}






