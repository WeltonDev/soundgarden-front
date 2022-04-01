const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const inputIngressos = document.querySelector('#lotacao');
const btnEnviar = document.querySelector('#btnEnviar')
const btnConfirmar = document.querySelector('#btnConfirmar');
const btnCancelar = document.querySelector('#btnCancelar');
const parametros = new URLSearchParams(window.location.search)
const id = parametros.get('id');
const nome = parametros.get('nome');
const email = parametros.get('email');
const ingressos = parametros.get('ingressos');

inputNome.value = nome;
inputEmail.value = email;
inputIngressos.value = ingressos;

btnEnviar.onclick = () => {
    document.querySelector('.fundo').style.display = 'block';
}

btnCancelar.onclick = () => {
    document.querySelector('.fundo').style.display = 'none';
}

btnConfirmar.onclick = () => {
    deletarReserva();
}
deletarReserva = () => {
    try {
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
            }
        };


        fetch(`https://xp41-soundgarden-api.herokuapp.com/bookings/${id}`, requestOptions)
            .then(result => {
                window.history.back();
            })
    }
    catch {
        alert('Não foi possível deletar a reserva');
    }
}