import { Oculos } from "./Oculos";

export class OculosGrau extends Oculos{
    private _grau: number;


	constructor(id: number, preco: number, cor: string, formato: string, 
        tipo: number,grau: number) {
        super(id, preco,cor, formato,tipo);
		this._grau = grau;
	}


    /**
     * Getter grau
     * @return {number}
     */
	public get grau(): number {
		return this._grau;
	}

    /**
     * Setter grau
     * @param {number} value
     */
	public set grau(value: number) {
		this._grau = value;
	}
    
    public visualizar(): void {
        super.visualizar();
        console.log(`Grau: ${this.grau}`)
    }




}