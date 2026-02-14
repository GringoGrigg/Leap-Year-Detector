function checkLeapYear() {

    var year = document.getElementById("yearInput").value;

    var resultText = "";

    // Check if input is empty
    if (year == "") {
        resultText = "Please enter a year!";
    }

    // Leap year condition
    else if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        resultText = year + " is a LEAP YEAR 🎉";
    }

    else {
        resultText = year + " is NOT a leap year ❌";
    }

    document.getElementById("result").innerHTML = resultText;
}
