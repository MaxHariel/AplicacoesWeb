function iniciarJogo () {
    var nivel = document.getElementById('nivel').value
    if (nivel == '') {
          alert('Por favor escolha um nível válido')
          return false
    }

    window.location.href ='MataMosquito.html?' + nivel
}