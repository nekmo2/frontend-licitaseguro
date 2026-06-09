document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // LICITACIONES
    // ==========================

    const formLicitaciones =
        document.getElementById(
            "formLicitaciones"
        );

    formLicitaciones.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();

            const fecha =
                document.getElementById(
                    "fecha"
                ).value;

            const estado =
                document.getElementById(
                    "estado"
                ).value;

            const formularioValido =
                validarFormularioLicitaciones(
                    fecha,
                    estado
                );

            if (!formularioValido) {
                return;
            }

            try {

                mostrarLoader();

                const datos =
                    await obtenerLicitaciones(
                        fecha,
                        estado
                    );

                console.log(datos);

                renderizarLicitaciones(datos);

            } catch (error) {

                console.error(error);

                document.getElementById(
                    "contenedorLicitaciones"
                ).innerHTML = `
                    <div class="alert alert-danger">
                        No fue posible obtener las licitaciones.
                    </div>
                `;

            } finally {

                ocultarLoader();

            }

        }
    );

    // ==========================
    // PROVEEDORES - VALIDACIÓN RUT
    // ==========================

    const formProveedor =
        document.getElementById(
            "formProveedor"
        );

    formProveedor.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();

            const rut =
                document.getElementById(
                    "rut"
                ).value.trim();

            const errorRut =
                document.getElementById(
                    "errorRut"
                );

            const resultado =
                document.getElementById(
                    "resultadoProveedor"
                );

            errorRut.textContent = "";
            resultado.innerHTML = "";

            if (!rut) {

                errorRut.textContent =
                    "Debe ingresar un RUT.";

                return;
            }

            if (!validarRut(rut)) {

                errorRut.textContent =
                    "El RUT ingresado no es válido.";

                return;
            }

            resultado.innerHTML = `
                <div class="alert alert-success">
                    RUT válido.
                </div>
            `;

        }
    );

});