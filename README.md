<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Dev previsao</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&display=swap" rel="stylesheet">
<script src="script.js"></script>
</head>

<body>
    <div class="caixa-maior">
        <input class="input-cidade" placeholder="Digite Nome Da Cidade"
        >
        
        <button onclick="clicknobotao()">
            <img class="lupa" src="https://www.svgrepo.com/show/488200/find.svg">
        
        </button>

<div class="caixa-media">
        <h2 class="cidade">Tempo no Rio De Janeiro</h2>
        <P class="temp">27°C</P>
        <p class="Umidade">umidade: 37%</p>
       
        
    </div>
    <div class="caixa-menor">
        <img class="icone" src="https://openweathermap.org/img/wn/04n.png">
        <p class="clima">Nuvens dispersas </p>
        
    </div> 
    

    </div>
</body>

</html>
* {
    font-family: 'Open Sans', sans-serif;
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url("https://source.unsplash.com/1600x900/?landscape");
}

.caixa-maior {
    background-color: #000;
    width: 90%;
    max-width: 420px;
    opacity: 0.8;
    border-radius: 30px;
    padding: 20px;



}

.lupa {
    height: 20px;

}

button {
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 50px;
    background-color: #7c7c7c2b;
    float: right;
    cursor: pointer;

}

button:hover {
    background-color: #7c7c7c6b
}

.caixa-media {
    margin-top: 20px;
}
.caixa-menor {
    display: flex;
    margin-top: 20px;
    align-items: center;
}

input {
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 25px;
    font-size: 20px;
    background-color: #7c7c7c2b;
    color: #fff;
    width: calc(100%-100px);


}

h2 {
    color: #fff;
    font-size: 30px;

}


.temp {
    margin-top: 10px;
    color: #fff;
}

.clima {
    color: #fff;
    margin-top: 10px
    
}

.Umidade {
    color: #fff;
    margin-top: 10px
}
