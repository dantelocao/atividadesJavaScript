

function mostrarApenasHome(){
    var login = document.getElementById("login-body");
    var criarConta = document.getElementById("nova-conta");
    var removeTexto = document.getElementById("divHome");
    removeTexto.style.display = 'block';

    login.style.display = 'none';
    criarConta.style.display = 'none';

}

function mostrarApenasLogin()
{
    var criarConta = document.getElementById("nova-conta");
    criarConta.style.display = 'none';

    var removeTexto = document.getElementById("divHome");
    removeTexto.style.display = 'none';
    
    var login = document.getElementById("login-body");
    login.style.display = 'block';


}

function mostrarApenasConta()
{
    var login = document.getElementById("login-body");
    login.style.display = 'none';

    var removeTexto = document.getElementById("divHome");
    removeTexto.style.display = 'none';

    var criarConta = document.getElementById("nova-conta");
    criarConta.style.display = 'block';



}

function verificaCamposLogin()
{
    const email = document.getElementById("login-email");
    const senha = document.getElementById("login-senha");
    const btnEntrar = document.getElementById("botaoLogin");




}