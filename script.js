//retorna a data completa
let data = new Date()
document.write(data)
document.write("<br><br>")
//retorna o dia

let data1 = new Date().getDate()
document.write(data1)
document.write("<br><br>")

//retorna com o  0 na frente
let data2 = new Date().getDate()
document.write(('0' +data2).slice(0-2))
document.write("<br><br>")

//retorna o mes
let data3 = new Date().getMonth()
document.write(data3)
document.write("<br><br>")

//retorna o ano
let data4 = new Date().getFullYear()
document.write(data4)
document.write("<br><br>")

//retorna dias da semana

let data5 = new Date()
let DiaDaSemana=['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado']
document.write(DiaDaSemana[data5.getDay()])
document.write("<br><br>")

//retorna a data padrao americano

let data6 = new Date()
document.write(data6.toDateString())
document.write("<br><br>")

//retorna a data padronizada do navegador
let data7 = new Date()
document.write(data7.toLocateDateString())
document.write("<br><br>")

//formataçao de data completa
//PRA ESSE FUNCIONAR TEM QUE COMENATR O RESTO!
let data8 = new Date()
let dia = ('0' +data8.getDate()).slice(-2)
let mes = data8.getMonth()
let meses=['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
let ano = data8.getFullYear()

document.write(dia+ ' de ' +meses[mes]+ ' de ' +ano);