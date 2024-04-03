export abstract class Oculos{
    private _id: number;
    private _preco: number;
    private _cor: string;
    private _formato: string;
    private _tipo: number;
    

	constructor(id: number, preco: number, cor: string, formato: string, tipo: number ) {
        this._id = id;
        this._preco = preco;
        this._cor = cor;
        this._formato = formato;
        this._tipo = tipo;
	}


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter preco
     * @return {number}
     */
	public get preco(): number {
		return this._preco;
	}

    /**
     * Getter cor
     * @return {string}
     */
	public get cor(): string {
		return this._cor;
	}

    /**
     * Getter formato
     * @return {string}
     */
	public get formato(): string {
		return this._formato;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter preco
     * @param {number} value
     */
	public set preco(value: number) {
		this._preco = value;
	}

    /**
     * Setter cor
     * @param {string} value
     */
	public set cor(value: string) {
		this._cor = value;
	}

    /**
     * Setter formato
     * @param {string} value
     */
	public set formato(value: string) {
		this._formato = value;
	}

    public visualizar(): void {

        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Oculos de Grau"
                break;
            case 2:
                tipo = "Oculos de Sol"
                break;
        }
        console.log("****************************************************")
        console.log("Óculos")
        console.log("****************************************************")
        console.log(`Id do oculos: ${this._id}`)
        console.log(`Preco em R$: ${this.preco}`)
        console.log(`Tipo: ${tipo}`)
        console.log(`Cor: ${this._cor}`)
        console.log(`Formato: ${this._formato}`)

    }
}
