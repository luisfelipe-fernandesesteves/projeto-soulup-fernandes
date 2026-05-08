//Altera qualquer texto do HTML
function alterarTexto(id, texto) {
    let objeto = document.getElementById(id); //Resgata o campo para alterar
    if (objeto) { //verifica se o elemento existe
        objeto.innerHTML = texto; //altera o campo com texto novo
    }
}

const form = document.getElementById('form-login');
const modal = document.getElementById('popup-modal');

form.addEventListener('submit', (event) => {  //Ao dar enter no botão, irá executar a ação.
    event.preventDefault();

    //Resgatando resposta do usuário pelo ID do input no HTML e atribuindo a variável
    const dataNasc = document.getElementById('birthday').value //.value Irá resgatar somente valor escrito pelo usuario
    const nome = document.getElementById('nome').value
    const senha = document.getElementById('password').value
    const email = document.getElementById('email').value
    
    //Cálculo da idade com base no mes atual < mes de aniversario
    const hoje = new Date(); //Objeto com data exata de agora
    const nascimento = new Date(dataNasc);

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth(); 

    //Verifica se o mês do aniversário do usuário já passou
    if (mes < 0 || (mes == 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;                                                        // mes < 0 = aniversario ainda nao chegou, logo decrementa a idade
    }

    //validação de campo obrigatorio vazio
    if (nome.trim() == '' || dataNasc == '' || senha.trim() == '' || email.trim() == '' ) {
        modal.classList.add('modal--active');
        return;
    } 
    //Validação de idade (-14 não podem acessar o app)

    if (idade < 14) {
        alterarTexto('modal-title', "Idade inválida!");
        alterarTexto('modal-message', "Idade inserida inferior a permitida para acessar o aplicativo.");
        modal.classList.add('modal--active'); //altera visibilidade
        return;
    }

    //Caso tudo estiver correto
    sessionStorage.setItem('usuarioLogado', 'true'); //sessionStore vem do WebStorage API, ira armazenar esses dados por sessao (reset no F5 ou fechamento)
    sessionStorage.setItem('nomeUsuario', nome.split(' ')[0]); //Puxa o nome inserido no input, separa cada palavra por espaço, coloca em um array 
                                                                // e resgata somente o Nome, ou seja, item inicial da lista (sempre começa por [0])
    window.location.href = "../index.html"; //Leva o usuário para página inicial

});