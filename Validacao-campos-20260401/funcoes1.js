function validaCampo(){
	
	let nome = document.getElementById('campoNome');
	if(nome.value == '') {
			alert('o campo nome nao foi preenchido');
			nome.focus();			
			return false;
	}		
	
	// validar o e-mail
	
	let email = document.getElementById('campoEmail');
	
	if(email.value == '') {
			alert('o campo e-mail nao foi preenchido');
			email.focus();
			return false;
	}
	
	if(email.value.indexOf('@') == -1) {
			alert("formato de e-mail incorreto!");
			email.focus();
			return false;
	}
	
	if(email.value.indexOf('.') == -1) {
		alert("formato de e-mail incorreto'!");
		email.focus();
		return false;
	}
	
	// verificar se selecionou um interesse
	
	let interesse = document.getElementById('interesse');
	
	if(interesse.value == -1) {
		alert('selecione uma área de interesse');
		interesse.focus();
		return false;
	}
		
	// verificar se digitou uma mensagem
	
	let  mensagem = document.getElementById('mensagem');
	
	if(mensagem.value == '') {
		alert("Informe a mensagem");
		mensagem.focus();
		return false;
	}	
	return true;
}

function ValidaCpf(strCPF){         
    
    var Soma;
    var Resto;
    Soma = 0;	
    var nome = document.getElementById('campoCpfs');        
	if (strCPF == "00000000000")  return false;    
	for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
	Resto = (Soma * 10) % 11;
	
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) 
	{	
	  alert("Nr cpf incorreto");		  
	  return false;
	}  
	
	Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
	
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) )
	{	
     alert("Nr cpf incorreto");    
	 return false;
	}
	
    return true;
}

function mascara_data(field){			    			    
    if(document.getElementById(field).value.length == 2){				
		document.getElementById(field).value = document.getElementById(field).value + "/";
	}					
	if (document.getElementById(field).value.length == 5){
		document.getElementById(field).value = document.getElementById(field).value + "/";			
	}
			
}	


		







 
 
 
 
 