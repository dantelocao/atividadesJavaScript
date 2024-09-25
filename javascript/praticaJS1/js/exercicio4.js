



function tratadorDeCliqueExercicio4(){
    let numeroEntrada = window.prompt()

    if (numeroEntrada >= 30 && numeroEntrada <= 50)
    {
        console.log(numeroEntrada + " está no intervalo [30,50]")
    }
    else if (numeroEntrada >= 60 && numeroEntrada <= 100)
    {
        console.log(numeroEntrada + " está no intervalo [60,100]")
    }
    else
    {
        console.log("O número informado não está em nenhum dos dois intervalos.")
    }
}