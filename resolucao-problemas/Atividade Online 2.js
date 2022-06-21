//Inicio

console.log ("Insira sua idade:"); //campo para inserção da idade

	let IdadeInserida = 19; //Exemplo de idade

console.log (IdadeInserida);

		if (IdadeInserida>=18) { 
		console.log("Cadastro Permitido."); //Se Sim
		}

		else {
		console.log("Cadastro não Permitido."); //Se Não
		}

console.log ("Insira a data do evento:"); //campo para inserção de data

	let DataInserida = 26062022; //Exemplo de data inserida
	let DataAtual = 20062022; //Data atual na qual foi feito está atividade

console.log (DataInserida);

		if (DataInserida>DataAtual) { 
			console.log("Data do evento permitida."); //Se Sim
		}
	
		else {
			console.log("Data inválida. O cadastro não será realizado."); //Se Não
		}

console.log ("Insira os nomes dos participantes que estarão no evento:");//Lista dos nomes dos participantes
		
	let NomesDosParticipantes = ["Rafaela", "Vitor", "Carlos", "Gean", "Maria", "Antônio"];
	let QuantidadeDeParticipantes = NomesDosParticipantes.length;

console.log ("Número atual de Pessoas Colocadas na lista:"); //Quantidade de participantes
console.log (QuantidadeDeParticipantes) ;

		if (QuantidadeDeParticipantes>100) { 
		console.log("Sua lista de participantes excedeu o limite de 100 pessoas e não será permitida."); //Se Não
		}

		else {
			console.log("Evento criado com sucesso."); //Se Sim
		}

		//Fim