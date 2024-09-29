var totalEleitores = parseInt(prompt("Digite o total de eleitores"))
var vt_brancos = parseInt(prompt("Digite o número de votos brancos"))
var vt_nulos = parseInt(prompt("Digite os votos nulos"))
var vt_validos = parseInt(prompt("Digite os votos validos"))

var porcentagemVtBranco = (totalEleitores/100) * vt_brancos
var porcentagemVtNulos = (totalEleitores/100) * vt_nulos
var porcentagemVtValidos = (totalEleitores/100) * vt_validos

alert(`A porcentagem de votos é ${porcentagemVtBranco}`)
alert(`A porcentagem de votos é ${porcentagemVtNulos} `)
alert(`A porcentagem de votos é ${porcentagemVtValidos}`)