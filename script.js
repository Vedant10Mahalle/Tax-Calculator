function calculateTax() {
    
    let income = parseFloat(document.getElementById('income').value);
    let taxRate = parseFloat(document.getElementById('taxRate').value);
    let resultDiv = document.getElementById('result');

    
    resultDiv.innerHTML = "";

    
    if (isNaN(income) || income <= 0) {
        resultDiv.innerHTML = "Please enter a valid income greater than 0.";
        resultDiv.style.color = "red";
        return;
    }

    if (isNaN(taxRate) || taxRate <= 0) {
        resultDiv.innerHTML = "Please enter a valid tax rate greater than 0.";
        resultDiv.style.color = "red";
        return;
    }

    
    let tax = (income * taxRate) / 100;

    
    resultDiv.innerHTML = `Tax to be paid: ₹${tax.toFixed(2)}`;
    resultDiv.style.color = "green";
}
