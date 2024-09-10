document.getElementById('calculator').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user inputs
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseFloat(document.getElementById('time').value);
    const interestType = document.getElementById('interestType').value;

    let amount;

    // Calculate the amount based on interest type
    if (interestType === 'simple') {
        amount = principal * (1 + rate * time);
    } else if (interestType === 'compound') {
        amount = principal * Math.pow((1 + rate), time);
    }

    // Display the result
    document.getElementById('result').innerText = `The amount you will receive at the end of ${time} ${document.getElementById('timeUnit').value} is ₹${amount.toFixed(2)}`;
});