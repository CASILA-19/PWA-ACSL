/*
* @author: Andres Camilo Silva
* @code: 202010035
* @version: 1.0
* @date: 2022-02-20
* @description: Crear un narrador de historias
*/

// crear un narrador de historias
function contar_historia(frase, tiempo = 2000) {
    const promesa = new Promise(function (resolve, reject) {
        if (frase.includes("CASILA")) {
            reject("Error: No se puede contar una historia con CASILA");
        }
        setTimeout(() => {
            console.log(frase);
            resolve(frase);
        }, tiempo);
    });

    return promesa
}

contar_historia("",0)
    .then(() => contar_historia("En la plaza de Pamplona hay una esquina"))
    .then(() => contar_historia("En la esquina hay una casa"))
    .then(() => contar_historia("En la casa hay una alcoba"))
    .then(() => contar_historia("En la alcoba hay una mesa"))
    .then(() => contar_historia("En la mesa hay una estaca"))
    .then(() => contar_historia("En la estaca hay una Lora"))
    .then(() => contar_historia("En la Lora hay una pata"))
    .then(() => contar_historia("En la pata hay un dedo"))
    .then(() => contar_historia("En el dedo hay una uña"))
    .then(() => contar_historia("En la uña hay una hebra"))
    .then(() => contar_historia("Y en la hebra hay una aguja"))
    .then(() => contar_historia("La aguja en la hebra"))
    .then(() => contar_historia("La hebra en la uña", 800))
    .then(() => contar_historia("La uña en el dedo", 800))
    .then(() => contar_historia("El dedo en la pata", 800))
    .then(() => contar_historia("La pata en la lora", 800))
    .then(() => contar_historia("La lora en la estaca", 800))
    .then(() => contar_historia("La estaca en la mesa", 800))
    .then(() => contar_historia("La mesa en la alcoba", 800))
    .then(() => contar_historia("La alcoba en la casa", 800))
    .then(() => contar_historia("La casa en la esquina", 800))
    .then(() => contar_historia("La esquina en la plaza de Pamplona", 800))
    .catch(console.log);

