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

    // Calculate how many times the original investment amount is represented in the final amount
    const times = amount / principal;

    // Display the result with the rupee symbol and times multiplier
    document.getElementById('result').innerText = `The amount you will receive at the end of ${time} years is ₹${amount.toFixed(2)}, which is ${times.toFixed(2)} times the original investment amount.`;
});
