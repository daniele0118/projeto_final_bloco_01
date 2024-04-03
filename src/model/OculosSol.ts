import { Oculos } from "./Oculos";

export class OculosSol extends Oculos{
    private _uv: boolean;


	constructor(id: number, preco: number, cor: string, formato: string, 
        tipo: number,uv: boolean) {
        super(id, preco,cor, formato,tipo);
		this._uv = uv;
	}


	public get uv(): boolean {
		return this._uv;
	}

	public set uv(value: boolean) {
		this._uv = value;
	}

    public visualizar(): void {
        super.visualizar();
        if(this.uv)
        console.log(`Esse oculos possui protecao contra raios uv!™️`);
    
    }




}