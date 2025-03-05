function tempo() {
    var data = new Date()
    var ano =   data.getFullYear() - 2024
    var mes = data.getMonth() + 5
    var dia = data.getDate() - 1
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    var juntos = document.getElementById('data')
    
    juntos.innerHTML = `${ano} anos, ${mes} meses, ${dia} dias`
    juntos.innerHTML += `<p>${hora} horas, ${minuto} minutos e ${segundo} segundos</p>`
} setInterval(tempo, 1000)