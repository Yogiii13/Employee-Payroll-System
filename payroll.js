function calculatePayroll() {
    // Get input values
    var employeeName = document.getElementById("employeeName").value;
    var month = document.getElementById("month").value;
    var year = parseInt(document.getElementById("year").value);
    var hourlyRate = parseFloat(document.getElementById("hourlyRate").value);
    var hoursWorked = parseFloat(document.getElementById("hoursWorked").value);
    var taxRate = parseFloat(document.getElementById("taxRate").value);

    // Validate input
    if (isNaN(hourlyRate) || isNaN(hoursWorked) || isNaN(taxRate)) {
        alert("Please enter valid numerical values for Hourly Rate, Hours Worked, and Tax Rate.");
        return;
    }

    // Calculate total pay before tax
    var totalPayBeforeTax = hourlyRate * hoursWorked;

    // Calculate tax amount
    var taxAmount = (taxRate / 100) * totalPayBeforeTax;

    // Calculate net pay
    var netPay = totalPayBeforeTax - taxAmount;

    // Display result
    var resultElement = document.getElementById("result");
    resultElement.classList.add("result-element");
    resultElement.textContent = `Payroll Summary for ${employeeName} (${month} ${year}):
        Total Pay Before Tax: $${totalPayBeforeTax.toFixed(2)}
        Tax Amount: $${taxAmount.toFixed(2)}
        Net Pay: $${netPay.toFixed(2)}`;
}
