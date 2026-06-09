let licitacionesActuales = [];
let paginaActual = 1;
const elementosPorPagina = 10;

function validarFormularioLicitaciones(fecha, estado) {

    let valido = true;

    document.getElementById("errorFecha").textContent = "";
    document.getElementById("errorEstado").textContent = "";

    if (!fecha) {
        document.getElementById("errorFecha").textContent =
            "Debe seleccionar una fecha.";
        valido = false;
    }

    if (!estado) {
        document.getElementById("errorEstado").textContent =
            "Debe seleccionar un estado.";
        valido = false;
    }

    return valido;
}

function mostrarLoader() {

    document
        .getElementById("loaderLicitaciones")
        .classList.remove("d-none");
}

function ocultarLoader() {

    document
        .getElementById("loaderLicitaciones")
        .classList.add("d-none");
}

function renderizarLicitaciones(datos) {

    const contenedor =
        document.getElementById("contenedorLicitaciones");

    contenedor.innerHTML = "";

    if (
        !datos.Listado ||
        datos.Listado.length === 0
    ) {

        contenedor.innerHTML = `
            <div class="alert alert-warning">
                No se encontraron licitaciones.
            </div>
        `;

        document.getElementById("paginacion").innerHTML = "";

        return;
    }

    licitacionesActuales = datos.Listado;
    paginaActual = 1;

    mostrarPagina();
}

function mostrarPagina() {

    const contenedor =
        document.getElementById("contenedorLicitaciones");

    contenedor.innerHTML = "";

    const inicio =
        (paginaActual - 1) * elementosPorPagina;

    const fin =
        inicio + elementosPorPagina;

    const licitacionesPagina =
        licitacionesActuales.slice(inicio, fin);

    licitacionesPagina.forEach((licitacion, index) => {

        contenedor.innerHTML += `
            <div class="card shadow-sm mb-3">

                <div class="card-body">

                    <h5>
                        ${licitacion.Nombre || "Sin nombre"}
                    </h5>

                    <p>
                        <strong>Código:</strong>
                        ${licitacion.CodigoExterno || "No disponible"}
                    </p>

                    <p>
                    <strong>Estado:</strong>
                    ${licitacion.Estado || "No disponible"}
                   </p>

                   <button
                   class="btn btn-primary btn-sm mt-2"
                   onclick="verDetalle(${inicio + index})">

                    Ver Detalle

                      </button>

                </div>

            </div>
        `;
    });

    renderizarPaginacion();
}

function renderizarPaginacion() {

    const totalPaginas =
        Math.ceil(
            licitacionesActuales.length /
            elementosPorPagina
        );

    const paginacion =
        document.getElementById("paginacion");

    paginacion.innerHTML = `
        <div class="d-flex justify-content-center align-items-center gap-3">

            <button
                class="btn btn-outline-primary"
                onclick="cambiarPagina(-1)"
                ${paginaActual === 1 ? "disabled" : ""}
            >
                Anterior
            </button>

            <span>
                Página ${paginaActual} de ${totalPaginas}
            </span>

            <button
                class="btn btn-outline-primary"
                onclick="cambiarPagina(1)"
                ${paginaActual === totalPaginas ? "disabled" : ""}
            >
                Siguiente
            </button>

        </div>
    `;
}

function cambiarPagina(direccion) {

    paginaActual += direccion;

    mostrarPagina();
}

function verDetalle(indice) {

    const licitacion =
        licitacionesActuales[indice];

    const contenido =
        document.getElementById(
            "contenidoDetalle"
        );

    contenido.innerHTML = `

        <h4>
            ${licitacion.Nombre || "Sin nombre"}
        </h4>

        <hr>

        <p>
            <strong>Código:</strong>
            ${licitacion.CodigoExterno || "No disponible"}
        </p>

        <p>
            <strong>Estado:</strong>
            ${licitacion.Estado || "No disponible"}
        </p>

        <p>
            <strong>Descripción:</strong>
            ${licitacion.Descripcion || "No disponible"}
        </p>

        <p>
            <strong>Fecha Cierre:</strong>
            ${licitacion.FechaCierre || "No disponible"}
        </p>

    `;

    const modal =
        new bootstrap.Modal(
            document.getElementById(
                "modalDetalle"
            )
        );

    modal.show();
}