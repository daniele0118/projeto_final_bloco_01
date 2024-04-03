import { Oculos } from "../model/Oculos";
import { OculosRepository } from "../repository/OculosRepository";

export class OculosController implements OculosRepository{

    private listaOculos: Array<Oculos> = new Array<Oculos>();

    public id: number = 0;

    listarTodos(): void {
        for (let oculos of this.listaOculos){
            oculos.visualizar();
        }
    }

    listarId(id: number): void {
        let buscaOculos = this.buscarNoArray(id);

        if(buscaOculos !== null)
            buscaOculos.visualizar();
        else
            console.log("\nOculos não encontrado!");
    }

    cadastrar(oculos: Oculos): void {
        this.listaOculos.push(oculos);
        console.log(`O oculos numero ${oculos.id} foi adicionado!`);
    }

    atualizar(oculos: Oculos): void {
        let buscaOculos = this.buscarNoArray(oculos.id);

        if(buscaOculos != null){
            this.listaOculos[this.listaOculos.indexOf(buscaOculos)] = oculos;
            console.log(`O oculos numero ${oculos.id} foi atualizado com sucesso!`);
        }else
        console.log(`O oculos numero ${oculos.id} nao foi encontrado!`);
    }
    
    deletar(id: number): void {
        let buscaOculos = this.buscarNoArray(id);

        if(buscaOculos !== null){
            this.listaOculos.splice(this.listaOculos.indexOf(buscaOculos),1);
            console.log(`A conta número ${id} foi excluída com êxito!`);
        }else{
            console.log("\nConta não encontrada");
        }
    }

    public buscarNoArray(id: number): Oculos | null{
        for( let oculos of this.listaOculos){
            if(oculos.id === id)
            return oculos;
        }

        return null;
    }
    
}