function sumarUno(numero, callback) {
    setTimeout(function () {
        callback(numero + 1);
    }, 1000);
}
sumarUno(10, function (resultado) {
    console.log(resultado);
});