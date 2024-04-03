import { Oculos } from "../model/Oculos";

export interface OculosRepository{
    listarTodos(): void;
    listarId(id: number): void;
    cadastrar(oculos: Oculos): void;
    atualizar(oculos: Oculos): void;
    deletar(id: number): void;
}