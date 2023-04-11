

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
    document.getElementById("resuleuro").innerHTML = resultadoEuro.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR',
    });
    document.getElementById("resuldolar").innerHTML = resultadoDolar.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    document.getElementById("resullibra").innerHTML = resultadoLibra.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR',
    });

}

function newFunction() {
    resultadoEuro = parseFloat(resultadoEuro.replace(',', '.'));
    console.log(resultadoEuro)
}
