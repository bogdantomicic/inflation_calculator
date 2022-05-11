function inflationCalculator() {
    let inflationRate = document.querySelector('#inflationRate');
    let money = document.querySelector('#money');
    let years = document.querySelector('#years').value;

    // parseFloat sluzi za pretvaranje stringa u broj sa zarezom
    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);
    years = parseFloat(years);

    // Formula za izracunavanje inflacije za prvu godinu
    let worth = money + (money * (inflationRate / 100));

    // Formula za izracunavanje inflacije za ostale godine
    for(let i = 1; i < years; i++) {
        worth += worth * (inflationRate / 100);
    };

    worth = worth.toFixed(2);

    let newElement = document.createElement('div');
    newElement.className = 'new-value';
    newElement.innerText = `Danasnjih ${money}€ vrijedi isto kao ${worth}€ za ${years} godina.`;
    document.querySelector('.container').appendChild(newElement);
};