// Conversão BRL -> USD
document.getElementById('convertBtn').addEventListener('click', function() {
    const brlValue = parseFloat(document.getElementById('brlInput').value);
    const usdRate = 5.00; // Cotação fixa para a v1.0.0
    

    if (isNaN(brlValue) || brlValue <= 0) {
        document.getElementById('result').innerText = "Erro: Digite um valor maior que zero.";
        return;
    }
    
    const converted = brlValue / usdRate;
    document.getElementById('result').innerText = `Resultado: $ ${converted.toFixed(2)} USD`;
});
// Conversão BRL -> EUR
document.getElementById('convertEuroBtn').addEventListener('click', function () {

    const brlValue = parseFloat(document.getElementById('eurInput').value);
    const euroRate = 6.00;

    if (isNaN(brlValue) || brlValue <= 0) {
        document.getElementById('resultEuro').innerText =
            "Erro: Digite um valor maior que zero.";
        return;
    }

    const converted = brlValue / euroRate;

    document.getElementById('resultEuro').innerText =
        `Resultado: € ${converted.toFixed(2)} EUR`;

});

// Conversor BRL --> GBP

document.getElementById('convertLibraBtn').addEventListener('click', function () {
const brlValue = parseFloat(document.getElementById('gbpInput').value);
const libraRate = 7.50;

if(isNaN(brlValue) || brlValue <= 0) {
    document.getElementById('resultLibra').innerText =
    "Erro: Digite um valor maior que zero.";
return;

}
const converted = brlValue / libraRate;

document.getElementById('resultLibra').innerText =
    `Resultado: £ ${converted.toFixed(2)} GBP`;
})