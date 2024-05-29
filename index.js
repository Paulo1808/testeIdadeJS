function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('infIdade')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Digite seu dados e tente novamente!')
        
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var imagem = document.getElementById('foto')
        imagem.style.display= 'flex'

        if (fsex[0].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                imagem.setAttribute('src', 'menina.jpg')
            }else if (idade < 21) {
                //adolecente
                imagem.setAttribute('src', 'mina.jpeg')
            }else if (idade < 50){
                // Adulto
                imagem.setAttribute('src', 'mulher.jpeg')
            }else {
                //idoso
                imagem.setAttribute('src', 'idosa.jpg')
            }

        } else {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                imagem.setAttribute('src', 'menino.jpg')
            }else if (idade < 21) {
                //adolecente
                imagem.setAttribute('src', 'mano.jpeg')
            }else if (idade < 50){
                // Adulto
                imagem.setAttribute('src', 'homem.jpg')
            }else {
                //idoso
                imagem.setAttribute('src', 'idoso.png')
            }
        }
        res.innerHTML = `Você é ${genero} e tem ${idade}.`
        res.appendChild(imagem)

    }
}
