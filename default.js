// <!-- Botão subir topo inicio -->
$(document).ready(function () {
    $(window).scroll(function () {
      if ($(document).scrollTop() > 400) {
        $("#btn-topo").show();
      } else {
        $("#btn-topo").hide();
      }
    });
});

//VALIDAÇÃO DO FORMULÁRIO
function validacaoNome(nome) {
  document.getElementById("nome").value.toUpperCase();
  if (!isNaN(nome.value)) {
    nome.style.border = "red solid 3px";
    nome.style.boxShadow = "4px red";
  } else {
    nome.style.border = "green solid 3px";
    nome.style.boxShadow = "4px green";
  }
}

function validacaoSobreNome(sobrenome) {
  document.getElementById("sobrenome").value.toUpperCase();
  if (!isNaN(sobrenome.value)) {
      sobrenome.style.border = "red solid 3px";
      sobrenome.style.boxShadow = "4px red";
  } else {
      sobrenome.style.border = "green solid 3px";
      sobrenome.style.boxShadow = "4px green";
  }
}

function validacaoEmail(email) {
  document.getElementById("email").value; 
  if (email.value == "" || email.value.indexOf('@') < 0) {
    email.style.border = "red solid 3px";
    email.style.boxShadow = "4px red";
  } else {
    email.style.border = "green solid 3px";
    email.style.boxShadow = "4px green";
  }
}

function validacaoSenha(senha) {
  if (senha.value == "") {
      senha.style.border = "red solid 3px";
      senha.style.boxShadow = "4px red";
  } else {
      senha.style.border = "green solid 3px";
      senha.style.boxShadow = "4px green";
  }
}
