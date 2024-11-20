let totalEur = 0;

while (true) {
    let amount = prompt("Ақша сомасын енгізіңіз (немесе 'стоп' деп жазыңыз тоқтату үшін):");
    
    if (amount.toLowerCase() == "стоп") {
        break;
    }
    let currency = prompt("Валютаны енгізіңіз (USD, KZT, EUR):")

    amount = parseInt(amount);

    if (isNaN(amount)) { //isNan-is not number 
        alert("Қате: ақша сомасы дұрыс емес. Сіз тек сан енгізуіңіз керек.");
        continue; 
    }

    if (currency == "USD") {
        totalEur += amount * 0.85; 
    } else if (currency == "KZT") {
        totalEur += amount * 0.002; 
    } else if (currency == "EUR") {
        totalEur += amount;  
    } else {
        alert("Қате: қолдау көрсетілетін валюталар тек USD, KZT және EUR.");
    }
}

alert("Барлық соманың евродағы қосындысы: " + totalEur);
