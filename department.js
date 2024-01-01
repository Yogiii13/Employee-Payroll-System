// Function to add a new department to the table
function addDepartment() {
    var departmentID = document.getElementById("departmentID").value;
    var departmentName = document.getElementById("departmentName").value;

    // Check if both departmentID and departmentName are not empty
    if (departmentID.trim() !== "" && departmentName.trim() !== "") {
        // Create a new row in the table
        var table = document.getElementById("departmentTable").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.rows.length);

        // Insert cells with data
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);

        // Assign values to cells
        cell1.innerHTML = departmentID; // Use the provided department ID
        cell2.innerHTML = departmentName;

        // Clear the input fields
        document.getElementById("departmentID").value = "";
        document.getElementById("departmentName").value = "";
    } else {
        alert("Please enter valid department ID and department name.");
    }
}
