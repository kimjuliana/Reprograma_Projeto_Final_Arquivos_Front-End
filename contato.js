let formulario = document.querySelector('#formulario');
let botao = document.querySelector('#botao-enviar')


botao.addEventListener('click', (evento) =>{
    evento.preventDefault();
    let email = document.querySelector('#mensagem')
       mensagem.textContent = 'Mensagem enviada com sucesso!'
})
