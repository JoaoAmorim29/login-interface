let cadastroBtn = document.querySelector(".cadastroBtn");
let cadastroNome = document.querySelector("#cadastroNome");
let cadastroEmail = document.querySelector("#cadastroEmail");
let cadastroSenha = document.querySelector("#cadastroSenha");
let cadastroConfirme = document.querySelector("#cadastroConfirme");
let usuarios = [];

cadastroBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    let usuario = {
        nome: cadastroNome.value,
        email: cadastroEmail.value,
        senha: cadastroSenha.value,
        confirme: cadastroConfirme.value,
    };

    let erros = validacaoCadastro(usuario);

    if(erros.length > 0){
        mostrarErros(erros);
        return;
    }

    let divErros = document.querySelector(".errosCadastro");
    let ul = divErros.querySelector("ul");
    ul.innerHTML = "";

    usuarios.push(usuario);
    troca();
    
    cadastroNome.value = "";
    cadastroEmail.value = "";
    cadastroSenha.value = "";
    cadastroConfirme.value = "";

    console.log(usuarios)
});

function validacaoCadastro(usuario){
    let erros = [];
    let expressao = /\S+@\S+\.\S+/;

    if (usuario.nome == "" || usuario.email == "" || usuario.senha == "" || usuario.confirme == ""){
        erros.push("Todos os campos são obrigátorios");
    } else{
        if (usuario.senha != usuario.confirme){
            erros.push("A senha de confirmação e a senha não correspondem")
        }
    
        if(!expressao.test(usuario.email)){
            erros.push("Email inválido")
        }
    }

    return erros;
}

function mostrarErros(erros){
    let divErros = document.querySelector(".errosCadastro");
    let ul = divErros.querySelector("ul");
    ul.innerHTML = "";

    for (let i = 0; i < erros.length; i++){
        let erro = erros[i];

        let li = document.createElement("li");
        li.classList.add("erro");
        li.textContent = erro;

        ul.appendChild(li);
    }
}