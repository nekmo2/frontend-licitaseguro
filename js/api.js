const API_CONFIG = {
    ticket: "793B116A-5F7D-4A77-A1AD-C9285E4D9462",
    baseUrl: "https://api.mercadopublico.cl/servicios/v1/publico"
};

function formatearFechaAPI(fechaInput) {

    const fecha = new Date(fechaInput);

    const dia = String(fecha.getDate()).padStart(2, "0");
    const mes = String(fecha.getMonth() + 1).padStart(2, "0");
    const anio = fecha.getFullYear();

    return `${dia}${mes}${anio}`;
}

async function obtenerLicitaciones(fecha, estado) {

    const fechaFormateada = formatearFechaAPI(fecha);

    const url =
        `${API_CONFIG.baseUrl}/licitaciones.json?fecha=${fechaFormateada}&estado=${estado}&ticket=${API_CONFIG.ticket}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Error HTTP ${response.status}`);
    }

    return await response.json();
}