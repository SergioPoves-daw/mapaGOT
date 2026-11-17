import { Casa } from './Casa.js';

let casaStark = new Casa("Casa Stark", "El Norte", "Lobo huargo gris sobre fondo blanco", "Se acerca el invierno", ["Eddard", "Robb", "Sansa", "Arya", "Bran Stark"], "Honor, lealtad y tradición");
let casaTargaryen = new Casa("Casa Targaryen", "Tierras de la Corona", "Dragón rojo de tres cabezas sobre fondo negro", "Fuego y sangre", ["Daenerys", "Viserys", "Aegon Targaryen"], "Antigua dinastía real vinculada a los dragones");
let casaBaratheon = new Casa("Casa Baratheon", "Tierras de la Tormenta", "Ciervo negro coronado sobre fondo dorado", "Nuestra es la furia", ["Robert", "Stannis", "Renly Baratheon"], "Fuerza, orgullo y espíritu guerrero");
let casaArryn = new Casa("Casa Arryn", "El Valle de Arryn", "Halcón y luna blanca sobre fondo azul", "Tan alto como el honor", ["Jon Arryn", "Robin Arryn"], "Una fortaleza situada en lo alto de las montañas");
let casaLannister = new Casa("Casa Lannister", "Occidente", "León dorado sobre fondo carmesí", "¡Oye mi rugido!", ["Tywin", "Cersei", "Jaime", "Tyrion Lannister"], "Riqueza, poder político y ambición");
let casaGreyjoy = new Casa("Casa Greyjoy", "Islas del Hierro", "Kraken dorado sobre fondo negro", "Nosotros no sembramos", ["Balon", "Theon", "Yara Greyjoy"], "Navegación, independencia y tradición marinera");
let casaTully = new Casa("Casa Tully", "Tierras de los Ríos", "Trucha plateada sobre fondo azul y rojo", "Familia, deber, honor", ["Hoster", "Edmure", "Catelyn Tully"], "Lealtad familiar y alianzas políticas");
let casaTyrell = new Casa("Casa Tyrell", "El Dominio", "Rosa dorada sobre fondo verde", "Crecer fuerte", ["Mace", "Margaery", "Olenna Tyrell"], "Riqueza agrícola, diplomacia e influencia");
let casaBolton = new Casa("Casa Bolton", "El Norte", "Hombre desollado sobre fondo rojo", "Nuestras hojas son afiladas", ["Roose", "Ramsay Bolton"], "Una casa norteña conocida por su crueldad y rivalidad histórica con los Stark");
let casaMartell = new Casa("Casa Martell", "Dorne", "Sol rojo atravesado por una lanza sobre fondo naranja", "Nunca doblegado, nunca roto", ["Doran", "Oberyn", "Trystane Martell"], "Independencia, orgullo y resistencia");
let casaBadajoz = new Casa("Badajoz", "Extremadura", "Alcazaba > Muralla China", "40 grados no son na'", ["Alberto", "Isa", "Ernesto"], "El Sol más activo y carnavalero de España");
let casaCaceres = new Casa("Cáceres", "Extremadura", "La Torta del Casar", "El origen de Juego de Tronos", ["Vega", "Pilo"], "Queso que huele bien");

let tarjeta = document.getElementById("tarjeta");

function mostrar(id, casa) {
    tarjeta.innerHTML = `
        <h2>${casa.getNombre}</h2>
        <h3>Región: ${casa.getRegion}</h3>
        <p>Emblema: ${casa.getEmblema}</p>
        <p>Lema: ${casa.getLema}</p>
        <p>${casa.getPersonajes.join(", ")}</p>
        <p>${casa.getCaracteristicas}</p>
        <img src="img/${id}.jpg">
    `;
}

function casaHover(id, casa) {
    let boton = document.getElementById(id);
    // Al pasar el ratón por encima
    boton.addEventListener("mouseenter", () => {
        tarjeta.hidden = false;
        mostrar(id, casa);
    });

    // Al alejar el ratón
    boton.addEventListener("mouseleave", () => {
        tarjeta.hidden = true;
    });
}

function casaClick(id, casa) {
    let boton = document.getElementById(id);
    boton.addEventListener("click", () => {
        // Si está escondido lo muestra, y si está mostrandose lo esconde
        tarjeta.hidden = !tarjeta.hidden;
        if (!tarjeta.hidden) mostrar(id, casa);
    });
}

// Casas mostradas al pasar el raton por encima
casaHover("stark", casaStark);
casaHover("targaryen", casaTargaryen);
casaHover("baratheon", casaBaratheon);
casaHover("arryn", casaArryn);
casaHover("lannister", casaLannister);
casaHover("greyjoy", casaGreyjoy);
casaHover("tully", casaTully);
casaHover("badajoz", casaBadajoz);

// Casas mostradas al hacer click
casaClick("tyrell", casaTyrell);
casaClick("bolton", casaBolton);
casaClick("martell", casaMartell);
casaClick("caceres", casaCaceres);