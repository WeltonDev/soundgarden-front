const modal = () => {
  //pegando o container
  let modal = document.getElementById("form");

  //pegando o botão que ativa o modal
  let buttonModal = document.querySelector(".btn-primary")

  //pegando o span que vai fechar o modal
  let closeModal = document.getElementsByClassName("close")[0];

  buttonModal.onclick = (function () {
    modal.style.display = 'block';
  })

  closeModal.onclick = function () {
    modal.style.display = "none";
  }


}
