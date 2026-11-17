export class Casa {
    #nombre;
    #region;
    #emblema;
    #lema;
    #personajes = [];
    #caracteristicas;

    constructor(nombre, region, emblema, lema, personajes, caracteristicas) {
        if (nombre) this.#nombre = nombre;
        if (region) this.#region = region;
        if (emblema) this.#emblema = emblema;
        if (lema) this.#lema = lema;
        if (personajes.length > 0) this.#personajes = personajes;
        if (caracteristicas) this.#caracteristicas = caracteristicas;
    }

    get getNombre() {
        return this.#nombre;
    }

    get getRegion() {
        return this.#region;
    }

    get getEmblema() {
        return this.#emblema;
    }

    get getLema() {
        return this.#lema;
    }

    get getPersonajes() {
        return this.#personajes;
    }

    get getCaracteristicas() {
        return this.#caracteristicas;
    }
}