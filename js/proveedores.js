function validarRut(rutCompleto) {

    rutCompleto = rutCompleto.replace(/\./g, "");
    rutCompleto = rutCompleto.replace("-", "");

    const cuerpo = rutCompleto.slice(0, -1);
    let dv = rutCompleto.slice(-1).toUpperCase();

    let suma = 0;
    let multiplo = 2;

    for (let i = cuerpo.length - 1; i >= 0; i--) {

        suma += Number(cuerpo[i]) * multiplo;

        multiplo++;

        if (multiplo > 7) {
            multiplo = 2;
        }
    }

    const resto = 11 - (suma % 11);

    let dvEsperado = "";

    if (resto === 11) {
        dvEsperado = "0";
    } else if (resto === 10) {
        dvEsperado = "K";
    } else {
        dvEsperado = String(resto);
    }

    return dv === dvEsperado;
}