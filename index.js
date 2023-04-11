

function Converter() {
    //Receber os valores dos inputs ho HTML
    let valDolar = parseFloat(document.getElementById("Dolar").value);
    let valEuro = parseFloat(document.getElementById("Euro").value);
    let valLibra = parseFloat(document.getElementById("Libra").value);
    let valReal = parseFloat(document.getElementById("Real").value);

    //Calcular e passar para as variáveis resultado
    resultadoEuro = valReal / valEuro;
    resultadoDolar = valReal / valDolar;
    resultadoLibra = valReal / valLibra;

    //Exibir o resultado na Página html
    document.getElementById("resuleuro").innerHTML = resultadoEuro.toFixed(2);
    document.getElementById("resuldolar").innerHTML = resultadoDolar.toFixed(2);
    document.getElementById("resullibra").innerHTML = resultadoLibra.toFixed(2);

}