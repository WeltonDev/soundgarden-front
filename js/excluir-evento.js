const inputNome = document.querySelector('#nome');
const inputBanner = document.querySelector('#banner');
const inputAtracao = document.querySelector('#atracoes');
const inputDescricao = document.querySelector('#descricao');
const inputData = document.querySelector('#data');
const inputIngressos = document.querySelector('#lotacao');

// BOTOES QUE SERÃO APRESENTADO NO MODAL
const btnEnviar = document.querySelector('#enviar');
const btnConfirmar = document.querySelector('#btnConfirmar');
const btnCancelar = document.querySelector('#btnCancelar');
const btnExcluido = document.querySelector('#btnExcluido');
// FUNDO MODAL
const divFundo = document.querySelector('.fundo');

// Abrir modal para confirmar exclusao
btnEnviar.onclick = (evento) => {
    evento.preventDefault();
    divFundo.style.display = 'block';
    document.querySelector('.text-exclusao').innerHTML = `Deseja excluir o evento <b>${nome} ?</b>`
}

// confirmar exclusão
btnConfirmar.onclick = () => {
    document.querySelector('.exclusao').style.display = 'block';
    document.querySelector('.confirm').innerHTML = `Evento <b>${nome}</b> excluído com sucesso !</b>`
}

// cancela exclusão
btnCancelar.onclick = () => {
    divFundo.style.display = 'none';
}

// modal confirmando exclusão
btnExcluido.onclick = () => {
    divFundo.style.display = 'none';
    deletar();
}

const form = document.querySelector('form')


// variavel que pega os parametros via URL
const parametros = new URLSearchParams(window.location.search);

const id = parametros.get("id");
console.log(id)

const nome = parametros.get("nome");
console.log(`O nome é ${nome}`)

const banner = parametros.get("banner");
console.log(`O banner é ${banner}`)

const descricao = parametros.get("descricao");
console.log(`A descricao é: ${descricao}`);

const data = parametros.get("data");
console.log(`A data é: ${data}`);

const ingressos = parametros.get("ingressos");
console.log(`O número de ingressos é: ${ingressos}`)

const atracoes = parametros.get("atracoes");
console.log(`O número de ingressos é: ${atracoes}`)

inputNome.value = nome;
inputBanner.value = banner;
inputDescricao.value = descricao;
inputIngressos.value = ingressos;
inputAtracao.value = atracoes;
inputData.value = new Date(data).toLocaleDateString('pt-BR', { timeZone: 'UTC' });


const deletar = () => {
    if (inputNome.value == '' || inputIngressos.value == '' || inputData.value == '') {
        return console.log('Evento não excluido');
    } else {
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
            }
        };


        fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${id}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                inputNome.value = '';
                inputBanner.value = '';
                inputAtracao.value = '';
                inputData.value = '';
                inputDescricao.value = '';
                inputIngressos.value = '';
            })
            .catch(error => console.log('error', error));


    }

}



