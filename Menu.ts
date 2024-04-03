const leia = require('readline-sync');


export function main(){

    let opcao: number;


    while(true){

        console.log("\n\n.-~*´¨`*·~-.¸_Óculos_,.-~*´¨`*·~-.\n");
        console.log("1:Listar todos os Produtos::::::");
        console.log("2:Listar Produto pelo ID::::::::");
        console.log("3:Cadastrar Produto:::::::::::::");
        console.log("4:Atualizar Produto:::::::::::::");
        console.log("5:Deletar Produto:::::::::::::::");
        console.log("0:Sair::::::::::::::::::::::::::");

        opcao = leia.questionInt("\nEntre com a opcao desejada: ");

        if( opcao == 0 ){
            process.exit(0)
        }

        switch(opcao){
            case 0:
                console.log("\nVolte sempre!");
                break;
            case 1:
                console.log("\n1:Listar todos os Produtos::::::");
                break;
            case 2:
                console.log("\n2:Listar Produto pelo ID::::::::");
                break;
            case 3:
                console.log("\n3:Cadastrar Produto:::::::::::::");
                break;
            case 4:
                console.log("\n4:Atualizar Produto:::::::::::::");
                break;
            case 5:
                console.log("\n5:Deletar Produto:::::::::::::::");
                break;
            default:
                console.log("\nInsira uma opcao válida\n");
                break;
        }
    
    }
}