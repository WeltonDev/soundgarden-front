const inputNome = document.querySelector('#nome');
const inputAtracao = document.querySelector('#atracoes');
const inputDescricao = document.querySelector('#descricao');
const inputData = document.querySelector('#data');
const inputIngresso = document.querySelector('#lotacao');

const form = document.querySelector('form');

const btnFechar = document.querySelector('#btnFechar');
const fundo = document.querySelector('.fundo');
const cadastroFeito = document.querySelector('.cadastroFeito');

btnFechar.onclick = () => {
    fundo.style.display = 'none';
}



form.onsubmit = async (evento) => {
    evento.preventDefault();

    const data = new Date(inputData.value).toISOString();

    var raw = {
        name: inputNome.value,
        "poster": "link da imagem",
        attractions: inputAtracao.value.split(','),
        description: inputAtracao.value,
        scheduled: data,
        number_tickets: inputIngresso.value,
    }

    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(raw),
        redirect: 'follow',
        headers: {
            "Content-Type": "application/json",
        }
    };

    await fetch("https://xp41-soundgarden-api.herokuapp.com/events", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => alert('Não foi possivel cadastrar evento.\nPreencha os dados e tente novamente'));

    fundo.style.display = "block";
    cadastroFeito.innerHTML = `<b>${inputNome.value}</b> cadastrado com sucesso !`;

    btnFechar.onclick = () => {
        window.location.href = './admin.html';
    }
    // LIMPANDO O FORMULÁRIO APÓS CRIAR EVENTO
    inputNome.value = '';
    inputAtracao.value = '';
    inputDescricao.value = '';
    inputData.value = '';
    inputIngresso.value = '';
}
