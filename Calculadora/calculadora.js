function calcular(tipo,valor) {
   if (tipo == 'acao') {
      if(valor == '+' || valor == '-' || valor == '*' || valor == '/' || valor == '.') {
         document.getElementById('resultado').value += valor
      } else if(valor == 'c'){
          document.getElementById('resultado').value = ''
      } else if (valor== '=') {
           var resultado_campo = eval(document.getElementById('resultado').value)
           document.getElementById('resultado').value = resultado_campo
      }
   } else if(tipo == 'valor') {
         document.getElementById('resultado').value += valor
   }
}