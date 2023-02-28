
let chave = "3aeeee58df0d1f49cb3792cb65c3f2bf"


function colocarnatela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML =  Math.floor(dados.main.temp) + "°C"
    document.querySelector(".clima").innerHTML = dados.weather[0].description
    document.querySelector(".Umidade").innerHTML = dados.main.humidity +"%" +" Umidade"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}


async function buscarcidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chave + 
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(resposta => resposta.json())

    colocarnatela(dados)
}


function clicknobotao(){
   let cidade = document.querySelector(".input-cidade").value

   buscarcidade(cidade)

}
