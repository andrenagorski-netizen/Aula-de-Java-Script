const fmr = document.querySelector("form");
const resp = document.querySelector("h3");

fmr.addEventListener("submit", function(event){
    event.preventDefault();
    
    const num1 = Number(document.querySelector("#inNum1").value);
    const num2 = Number(document.querySelector("#inNum2").value);
    const operacao = document.querySelector("#inOperacao").value;
    
    if(operacao === "soma"){
        resp.textContent = num1 + num2;
    }else if(operacao === "sub"){
        resp.textContent = num1 - num2;
    }else if(operacao === "mult"){
        resp.textContent = num1 * num2;
    }else if(operacao === "div"){
        resp.textContent = num1 / num2;
    }

    
   
});

