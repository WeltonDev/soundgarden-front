const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");

botaoFechar = document.querySelector('#btnFechar');
divFundo = document.querySelector('.fundo')

botaoFechar.onclick = () => {
    divFundo.style.display = 'none'
}

listaEventos = async (evento) => {
    BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

    try {
        // //loading: block
        // document.querySelector('#loading').style.display = 'block';
        let requestOptions = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        };


        const resposta = await fetch(`https://xp41-soundgarden-api.herokuapp.com/bookings/event/${id}`, requestOptions)
        const conteudo = await resposta.json();
        // document.querySelector('.textoReserva').innerHTML += ` ${conteudo[0].event.name}`
        console.log(conteudo)

        conteudo.forEach((evento, i) => {
            reservas = document.querySelector('tbody');
            novaReserva = document.createElement('tr');
            novaReserva.innerHTML = `<th scope="row">${i + 1}</th>
            <td>${evento.owner_name}</td>
            <td>${evento.owner_email}</td>
            <td>${evento.number_tickets}</td>
`

            reservas.appendChild(novaReserva);
        })

        if (conteudo.length === 0) {
            document.querySelector('.fundo').style.display = 'block';
        }
        document.querySelector('#loading').style.display = 'none';

    }
    catch (erro) {
        console.log(erro);
        alert('Este evento ainda possui nenhuma reserva realizada!');
    }
}


teste = async () => {
    try {
        let requestOptions = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        };

        const resposta = await fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${id}`, requestOptions)
        const conteudo = await resposta.json();
        console.log(conteudo)
        document.querySelector('.textoReserva').innerHTML += ` <b>${conteudo.name.toUpperCase()}</b>`
        document.querySelector('.cadastroFeito').innerHTML += `O evento <b>${conteudo.name}</b> ainda não possui reservas!<br>Deseja reservar um ingresso ?`
    }
    catch {
        alert('deu ruim')
    }
}

listaEventos();
teste();