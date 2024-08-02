//EJERCICIO #1
function primerEjercicio() {
    let dimension1 = 5;
    let dimension2 = 4;
    let matriz = [];
    for (let i = 0; i < dimension1; i++) {
        let arreglo = [];
        for (let j = 0; j < dimension2; j++) {
            let numero = Number(prompt("Ingrese el valor de la matriz en la posición [" + i + "][" + j + "]:"));
            arreglo.push(numero);
        }
        matriz.push(arreglo);
    }
    imprimirMatriz(dimension1, dimension2, matriz);
}

function imprimirMatriz(dimension1, dimension2, matriz){
    let strMatriz = "";
    const strDivision = "---------------------------------";
    for(let i = 0; i < dimension1; i++){
        strMatriz += strDivision + "\n";
        for(let j = 0; j < dimension2; j++){
            strMatriz += "|\t" + matriz[i][j] + "\t";
            if(j === (dimension2 - 1)){
                strMatriz += "|\n";
            }
        }
    }
    strMatriz += strDivision;
    console.log(strMatriz);
}



//EJERCICIO #2
function segundoEjercicio() {
    let dimension1 = 8;
    let dimension2 = 8;
    let tablero = generarTablero(dimension1, dimension2);
    let cantTrampas = generarCantidadTrampasSeccion(dimension1);
    let trampasTablero = generarCasillasConTrampas(dimension1, cantTrampas);
    imprimirTablero(dimension1, dimension2, tablero, trampasTablero);
    console.log("Trampas por sección: " + cantTrampas);
    console.log("Casillas con trampa: " + trampasTablero);
}

/*
Función que se encarga de generar la matriz que contendrá 
el tablero de juego de 8x8.
*/
function generarTablero(dimension1, dimension2){
    let matriz = [];
    for (let i = 0; i < dimension1; i++) {
        let arreglo = [];
        for (let j = 0; j < dimension2; j++) {
            if (i % 2 === 0) {
                arreglo.push((j + 1) + (i * dimension2));
            } else {
                arreglo.unshift((j + 1) + (i * dimension2));
            }
        }
        matriz.push(arreglo);
    }
    return matriz;
}

/*
Función que genera la cantidad de trampas que habrá 
en cada sección del tablero (cada dos filas), teniendo
un mínimo de 2 y un máximo de 5 trampas por sección.
La cantidad de trampas por sección se almacena en un
arreglo.
*/
function generarCantidadTrampasSeccion(dimension1){
    let trampas = [];
    const min = 2;
    const max = 5;
    for(let i = 0; i < (dimension1/2); i++){
        trampas.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return trampas;
}

/*
Función que se encarga de almacenar en un arreglo el número
de las casillas a las cuales se les ha asignado una trampa,
tomando en cuenta que dichos valores no se repitan y correspondan
a la sección del tablero correspondiente.
*/
function generarCasillasConTrampas(dimension1, cantidadTrampas){
    let min = 1;
    let max = (dimension1 * 2);
    let casillasTrampa = [];
    let casilla = 0;
    cantidadTrampas.forEach((trampas) => {
        let noRepetidas = 0;
        while(noRepetidas !== trampas){
            casilla = Math.floor(Math.random() * (max - min + 1) + min);
            if(!(casillasTrampa.includes(casilla))){
                casillasTrampa.push(casilla)
                noRepetidas += 1;
            }
        }
        min = min + (dimension1 * 2);
        max = max + (dimension1 * 2);
    });
    return casillasTrampa;
}

/*
Función que se encarga de imprimir el tablero, mostrando las casillas,
el número que identifica a las mismas, y las trampas existentes en
algunas de estas.
*/
function imprimirTablero(dimension1, dimension2, tablero, trampas){
    let strTablero = "";
    const strDivision = "-----------------------------------------------------------------";
    let strFila = "";
    let strFilaTrampa = "";
    for(let i = (dimension1 - 1); i > -1; i--){
        strFila = "";
        strFilaTrampa = "";
        for(let j = 0; j < dimension2; j++){
            strFila += "|\t" + tablero[i][j] + "\t";
            if(trampas.includes(tablero[i][j])){
                strFilaTrampa += "|\t#\t";
            }else{
                strFilaTrampa += "|\t \t";
            }
            if(j === (dimension2 - 1)){
                strFila += "|";
                strFilaTrampa += "|";
            }
        }
        strTablero += strDivision + "\n" + strFila + "\n" + strFilaTrampa + "\n";
    }
    strTablero += strDivision;
    console.log(strTablero);
}