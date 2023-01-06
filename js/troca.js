function troca(){
    let login = document.querySelector(".login");
    let cadastro = document.querySelector(".cadastro");

    if(login.classList.contains("none")){
        login.classList.remove("none");
        cadastro.classList.add("none");
    } else if(cadastro.classList.contains("none")){
        cadastro.classList.remove("none");
        login.classList.add("none");
    }

    zerarErros();
    zerarInputs();
}

function zerarErros(){
    let login = document.querySelector(".login");
    let cadastro = document.querySelector(".cadastro");

    let ulLogin = login.querySelector("ul");
    let ulCadastro = cadastro.querySelector("ul");

    ulCadastro.innerHTML = "";
    ulLogin.innerHTML = "";
}

function zerarInputs(){
    let login = document.querySelector(".login");
    let cadastro = document.querySelector(".cadastro");

    let inputsLogin = login.querySelectorAll("input");
    let inputsCadastro = cadastro.querySelectorAll("input");

    inputsCadastro.forEach((input)=>{
        input.value = "";
    });

    inputsLogin.forEach((input)=>{
        input.value = "";
    });
}