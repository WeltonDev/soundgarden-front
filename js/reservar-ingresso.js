const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const inputIngressos = document.querySelector('#lotacao');
const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");
const btnFechar = document.querySelector('#btnFechar');
const btnEnviar = document.querySelector('#btnEnviar')

btnFechar.onclick = (evento) => {
    evento.preventDefault();
    window.location.href = './eventos.html'
}

btnEnviar.onclick = (evento) => {
    evento.preventDefault();
    reservarEvento();
}

reservarEvento = () => {
    try {
        var raw = {
            owner_name: inputNome.value,
            owner_email: inputEmail.value,
            number_tickets: inputIngressos.value,
            event_id: id,
        }

        var requestOptions = {
            method: 'POST',
            body: JSON.stringify(raw),
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
            }
        };

        fetch("https://xp41-soundgarden-api.herokuapp.com/bookings", requestOptions)
            .then(response => response.text())

        document.querySelector('.fundo').style.display = 'block';
    } catch {
        alert('Não foi possivel reservar ingresso!');
    }
}