let loginBtn = document.querySelector(".loginBtn");
let loginEmail = document.querySelector("#loginEmail");
let loginSenha = document.querySelector("#loginSenha");

loginBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    let usuarioLogin = {
        email: loginEmail.value,
        senha: loginSenha.value
    }

    let erros = validandoLogin(usuarioLogin, usuarios);

    if(erros.length > 0){
        mostrarErrosLogin(erros);
        return
    }

    zerarInputs();
    alert("Login feito com sucesso")
});


function validandoLogin(usuarioLogin, usuarios){
    let erros = [];
    let expressao = /\S+@\S+\.\S+/;
    let usuario = buscandoUsuario(usuarioLogin, usuarios);

    if (usuarioLogin.email == "" || usuarioLogin.senha == ""){
        erros.push("Todos os campos são obrigátorios");
    } else{
        if (!expressao.test(usuarioLogin.email)){
            erros.push("Email inválido");
        } else {
            if (!usuario){
                erros.push("Você não possui uma conta");
            } else{
                if (usuario.senha != usuarioLogin.senha){
                    erros.push("Senha incorreta")
                }
            }
        }
    }

    return erros;
}

function buscandoUsuario(usuarioLogin, usuarios){
    for(let i = 0; i < usuarios.length; i++){
        let usuario = usuarios[i]

        if (usuario.email == usuarioLogin.email){
            return usuario;
        }
    }
}

function mostrarErrosLogin(erros){
    let divErros = document.querySelector(".errosLogin");
    let ul = divErros.querySelector("ul");
    ul.innerHTML = "";

    for(let i = 0; i < erros.length; i++){
        let erro = erros[i];

        let li = document.createElement("li");
        li.classList.add("erro");
        li.textContent = erro;

        ul.appendChild(li)
    }
}