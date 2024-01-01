$(document).ready(function() {
    $("#back").click(function(){
        window.location.href = 'employee.html';
    });
    $("#addEmployeeButton").click(function() {
        var employeeId = $("#employeeId").val();
        var employeeName = $("#employeeName").val();
        var employeeMiddleName = $("#employeeMiddleName").val();
        var employeeLastName = $("#employeeLastName").val();
        var employeeDepartment = $("#employeeDepartment").val();
        var employeePosition = $("#employeePosition").val();
        var employeeSalary = $("#employeeSalary").val();

        if (employeeId!= '' && employeeName != '' && employeeMiddleName!= '' && employeeLastName!= '' && employeeDepartment != ''&& employeePosition != '' && employeeSalary != '' )
         {
            $("#employeeTable").append("<tr><td>" + employeeId + "</td><td>" + employeeName + "</td><td>" + employeeMiddleName +"</td><td>" +employeeLastName + "</td><td>" +employeeDepartment +"</td><td>" +employeePosition + "</td><td>" +employeeSalary+"</td></tr>");
            $("#employeeName").val('');
            $("#employeeMiddleName").val('');
            $("#employeeLastName").val('');
            $("#employeeDepartment").val('');
            $("#employeePosition").val('');
            $("#employeeSalary").val('');
        } else {
            alert('Please enter all the details');
        }
    });
});