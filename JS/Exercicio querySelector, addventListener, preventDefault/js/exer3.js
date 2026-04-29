const fmr = document.querySelector("form")
const resp = document.querySelector("h3")

fmr.addEventListener("submit", function(event){
    event.preventDefault();
    
    const temp = Number(document.querySelector("#inTemp").value);
    const operacao = document.querySelector("#inOperacao").value;
    
     if(operacao === "celsios"){
        const fahrenheit = (temp * 9/5) + 32;
        resp.textContent = `${temp}°C é igual a ${fahrenheit.toFixed(1)}°F`;
    }else if(operacao === "fahrenheit"){
        const celsius = (temp - 32) * 5/9;
        resp.textContent = `${temp}°F é igual a ${celsius.toFixed(1)}°C`;
    }
}); 