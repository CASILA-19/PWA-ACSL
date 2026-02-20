function sumarUno(numero, callback) {
    if (numero >= 10){
        callback('Numero es muy alto')
        return;
    }
    setTimeout(function () {
        callback(numero + 1);
    }, 1000);
}
sumarUno(5, function (resultado) {
    console.log(resultado);
});