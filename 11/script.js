class Cuenta {
    id;
    saldo;

    constructor(id, saldo) {
        this.id = id;
        this.saldo = saldo;
    }

    depositar(deposito) {
        this.saldo += deposito;
    }

    retirar(retiro) {
        this.saldo -= retiro;
    }

    getId() {
        return this.id;
    }

    getSaldo() {
        return this.saldo;
    }
}

let cuentas = [];
var numeroCuenta = 1;
let opcion = 0;

function ejercicioCuentas() {
    do {
        console.log("¡BIENVENIDO!\n" +
            "1. Crear cuenta.\n" +
            "2. Depositar a una cuenta.\n" +
            "3. Retirar de una cuenta.\n" +
            "4. Obtener información de las cuentas.\n" +
            "5. Salir.")
        opcion = Number(prompt("Ingrese el número correspondiente a la acción a realizar:"));
        switch (opcion) {
            case 1:
                console.log("--- CREACIÓN DE CUENTA ---");
                console.log("Ingresando saldo inicial...");
                let saldoCuenta = Number(prompt("Ingrese el saldo inicial de la cuenta:"));
                if (saldoCuenta >= 0) {
                    cuentas.push(new Cuenta(numeroCuenta, saldoCuenta));
                    console.log("¡Cuenta no. " + numeroCuenta + " creada con éxito!");
                    numeroCuenta += 1;
                } else {
                    console.log("ERROR: No se puede crear una cuenta con saldo negativo.");
                }
                break;
            case 2:
                if (cuentas.length > 0) {
                    console.log("--- DEPOSITAR A UNA CUENTA ---");
                    mostrarInformacionCuentas(cuentas);
                    console.log("Ingresando número de cuenta...");
                    var idCuenta = Number(prompt("Ingrese el número de la cuenta a depositar:"));
                    var cuenta = existeCuenta(cuentas, idCuenta);
                    if (cuenta) {
                        console.log("Ingresando cantidad a depositar en la cuenta no. " + idCuenta + "...");
                        let deposito = Number(prompt("Ingrese la cantidad a depositar en la cuenta no. " + idCuenta + ":"));
                        if (deposito > 0) {
                            cuenta.depositar(deposito);
                            console.log("¡Depósito realizado con éxito!");
                        } else {
                            console.log("ERROR: La cantidad a depositar debe ser mayor a 0.");
                        }
                    } else {
                        console.log("ERROR: El número de cuenta ingresado no existe en el sistema.");
                    }
                } else {
                    console.log("No hay cuentas creadas.")
                }
                break;
            case 3:
                if (cuentas.length > 0) {
                    console.log("--- RETIRAR DE UNA CUENTA ---");
                    mostrarInformacionCuentas(cuentas);
                    console.log("Ingresando número de cuenta...");
                    var idCuenta = Number(prompt("Ingrese el número de la cuenta de la que se retirará:"));
                    var cuenta = existeCuenta(cuentas, idCuenta);
                    if (cuenta) {
                        console.log("Ingresando cantidad a retirar de la cuenta no. " + idCuenta + "...");
                        let retiro = Number(prompt("Ingrese la cantidad a retirar de la cuenta no. " + idCuenta + ":"));
                        if (retiro > 0) {
                            if (retiro <= cuenta.saldo) {
                                cuenta.retirar(retiro);
                                console.log("¡Retiro realizado con éxito!");
                            } else {
                                console.log("ERROR: Saldo insuficiente.");
                            }
                        } else {
                            console.log("ERROR: La cantidad a retirar debe ser mayor a 0.");
                        }
                    } else {
                        console.log("ERROR: El número de cuenta ingresado no existe en el sistema.");
                    }
                } else {
                    console.log("No hay cuentas creadas");
                }
                break;
            case 4:
                if (cuentas.length > 0) {
                    mostrarInformacionCuentas(cuentas);
                } else {
                    console.log("No hay cuentas creadas.");
                }
                break;
            case 5:
                console.log("Saliendo...");
                break;
            default:
                console.log("ERROR: Ingresó un valor no esperado");
                break;
        }
    } while (opcion !== 5);
}

function mostrarInformacionCuentas(cuentas) {
    for (let cuenta of cuentas) {
        console.log("Saldo de la cuenta no. " + cuenta.id + ": " + cuenta.saldo);
    }
}

function existeCuenta(cuentas, id) {
    for (let cuenta of cuentas) {
        if (cuenta.id === id) {
            return cuenta;
        }
    }
    return null;
}