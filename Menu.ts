import { OculosController } from "./src/controller/OculosController";
import { OculosGrau } from "./src/model/OculosGrau";
import { OculosSol } from "./src/model/OculosSol";
const leia = require('readline-sync');


export function main(){

    let oculos: OculosController = new OculosController();
    let id, tipo, preco, opcao, grau: number;
    let cor, formato: string;
    let uv: boolean;
    let tiposOculos = ['Oculos de grau', ' Oculos de sol'];

    
    while(true){

        console.log("\n\n-~*´¨`*·~-.¸_Óculos_,.-~*´¨`*·~-\n");
        console.log("1:Listar todos os Produtos::::::");
        console.log("2:Listar Produto pelo ID::::::::");
        console.log("3:Cadastrar Produto:::::::::::::");
        console.log("4:Atualizar Produto:::::::::::::");
        console.log("5:Deletar Produto:::::::::::::::");
        console.log("0:Sair::::::::::::::::::::::::::");

        opcao = leia.questionInt("\nEntre com a opcao desejada: ");

        if( opcao == 0 ){
            console.log("\nVolte sempre!");
            process.exit(0)
        }

        switch(opcao){
            case 1:
                console.log("\n1:Listar todos os Produtos::::::");
                oculos.listarTodos();
                break;
            case 2:
                console.log("\n2:Listar Produto pelo ID::::::::");
                id = leia.questionInt("Insira o id do oculos: ");
                oculos.listarId(id);
                break;
            case 3:
                console.log("\n3:Cadastrar Produto:::::::::::::");
                id = leia.questionInt("Insira o id do oculos: ");
                preco = leia.questionInt("Insira o preco oculos: ");
                cor = leia.question("Insira a cor do oculos: ");
                formato = leia.question("Insira o formato do oculos: ");

                console.log("Informe o tipo de oculos: ");
                tipo = leia.keyInSelect(tiposOculos,"", {cancel: false}) + 1;
                switch(tipo){
                    case 1:
                        grau = leia.questionInt("Insira o grau: ");
                        oculos.cadastrar( new OculosGrau(id, preco, cor, formato,tipo, grau));
                        break;
                    case 2:
                        uv = leia.keyInYNStrict("\nPossui uv: ");
                        oculos.cadastrar( new OculosSol(id, preco, cor, formato,tipo, uv));
                        break;
                }
                break;
            case 4:
                console.log("\n4:Atualizar Produto:::::::::::::");
                id = leia.questionInt("Insira o id do oculos: ");
                let buscaOculosculos = oculos.buscarNoArray(id);

                preco = leia.questionInt("Insira o preco oculos: ");
                cor = leia.question("Insira a cor do oculos: ");
                formato = leia.question("Insira o formato do oculos: ");

                console.log("Informe o tipo de oculos: ");
                tipo = leia.keyInSelect(tiposOculos,"", {cancel: false}) + 1;
                switch(tipo){
                    case 1:
                        grau = leia.questionInt("Insira o grau: ");
                        oculos.atualizar( new OculosGrau(id, preco, cor, formato,tipo, grau));
                        break;
                    case 2:
                        uv = leia.keyInYNStrict("\nPossui uv:");
                        oculos.atualizar( new OculosSol(id, preco, cor, formato,tipo, uv));
                        break;
                }break;
            case 5:
                console.log("\n5:Deletar Produto:::::::::::::::");
                id = leia.questionInt("Insira o id do oculos: ");
                oculos.deletar(id);
                break;
            default:
                console.log("\nInsira uma opcao válida\n");
                break;
        }
    
    }
}
main();