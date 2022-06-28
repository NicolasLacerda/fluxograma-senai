//Inicio

			console.log ("Insira sua idade:"); //campo para inserção da idade

let idadeInserida = 19; //Exemplo de idade

			console.log (idadeInserida);
			console.log("");
			console.log ("Processando...");	

		if (idadeInserida>=18) { 
			console.log("-------------------");
			console.log("Cadastro Permitido."); //Se Sim
			console.log("-------------------");
		}

		else {
			console.log("----------------------");
			console.log("Cadastro não Permitido."); //Se Não
			console.log("----------------------");
		}

	
			console.log("");


			console.log ("Insira a data do evento:"); //campo para inserção de data

let dataInserida = "26092023" //Exemplo de data inserida
let dataInseridaEmNumero = Number(dataInserida)
let data = new Date();
let dia = String(data.getDate()).padStart(2, '0');
let mes = String(data.getMonth() + 1).padStart(2, '0');
let ano = data.getFullYear();
let dataAtual = dia + mes + ano; //Data atual

			console.log(dataInserida.substr(0, 2) + "/" + dataInserida.substr(2,2) + "/" + dataInserida.substr(4,4))
			console.log("");
			console.log ("Processando...");

		if (dataInseridaEmNumero>dataAtual) { 
			console.log("---------------------------------------------");
			console.log("Data inválida. O cadastro não será realizado."); //Caso a data fosse menor o evento não ocorreria.
			console.log("---------------------------------------------");
		}
	
		else {
			console.log("-------------------------");
			console.log("Data do evento permitida."); //Como a data não é maior que a data atual o evento é permitido.
			console.log("-------------------------");
		}

			console.log("");

			console.log ("Insira os nomes dos participantes que estarão no evento:"); //Lista dos nomes dos participantes
			console.log("");

let nomesDosParticipantes = ["Rafaela", "Vitor", "Carlos", "Gean", "Maria", "Antônio"];
let quantidadeDeParticipantes = nomesDosParticipantes.length;
	
		for (let nome of nomesDosParticipantes) {

    		console.log(nome)

		}
			console.log("");
			console.log ("Processando...");

		if (quantidadeDeParticipantes>100) { 
			console.log("--------------------------------------------------------------------------------");
			console.log("Sua lista de participantes excedeu o limite de 100 pessoas e não será permitida."); //Se Não
			console.log("--------------------------------------------------------------------------------");
		}

		else {
			console.log("--------------------------");
			console.log("Evento criado com sucesso."); //Se Sim
			console.log("--------------------------");
		}

//Fim