listaEventos = async (evento) => {
    BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";
    try {
        //loading: block
        document.querySelector('#loading').style.display = 'block';
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        const resposta = await fetch(`${BASE_URL}/events/`, requestOptions)
        const conteudo = await resposta.json();
        console.log(conteudo)



        conteudo.forEach((evento) => {
            todosEventos = document.querySelector('#eventos');
            novoEvento = document.createElement('article');
            novoEvento.setAttribute('class', 'evento card p-5 m-3');
            novoEvento.innerHTML = ` <h2>${evento.name} - ${new Date(evento.scheduled).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</h2>
        <h4>${evento.attractions}</h4>
        <p>${evento.description}</p>
        <a href="#" class="btn btn-primary">reservar ingresso</a>`


            document.querySelector('#loading').style.display = 'none';

            todosEventos.appendChild(novoEvento);
        })
    }
    catch (erro) {
        console.log(erro);
        alert('Não foi possivel carregar os eventos!');
    }
}
listaEventos();