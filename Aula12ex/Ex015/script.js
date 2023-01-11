function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fAno.value)
      var gênero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if(fsex[0].checked){
          genêro = 'Homem'
          if(idade >= 0 && idade < 12){
              //Criança
              img.setAttribute('src', 'foto-bebe-m.png')
              res.innerHTML = `Detectamos uma criança com ${idade} anos.`
          }else if (idade < 20){
            //jovem
            img.setAttribute('src', 'foto-adolecente-m.png')
            res.innerHTML = `Detectamos um jovem com ${idade} anos.`
          }else if(idade < 50){
              //adulto
              img.setAttribute('src', 'foto-adulto-m.png')
              res.innerHTML = `Detectamos um adulto com ${idade} anos.`
          }else {
              //idoso
              img.setAttribute('src', 'foto-idoso-m.png')
              res.innerHTML = `Detectamos um idoso com ${idade} anos.`
          }
      }else if(fsex[1].checked){
          genêro = 'Mulher'
          if(idade >= 0 && idade < 12){
            //Criança
            img.setAttribute('src', 'foto-bebe-f.png')
            res.innerHTML = `Detectamos uma criança com ${idade} anos.`
        }else if (idade < 20){
          //jovem
          img.setAttribute('src', 'foto-adolecente-f.png')
          res.innerHTML = `Detectamos uma jovem com ${idade} anos.`
        }else if(idade < 50 && idade){
            //adulto
            img.setAttribute('src', 'foto-adulto-f.png')
            res.innerHTML = `Detectamos uma adulta com ${idade} anos.`
        }else {
            //idoso
            img.setAttribute('src', 'foto-idoso-f.png')
            res.innerHTML = `Detectamos uma idosa com ${idade} anos.`
        }
      }
      res.style.textAlign = 'center'
      
      res.appendChild(img)
    }

}