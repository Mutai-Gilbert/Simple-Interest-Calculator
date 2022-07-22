function compute()
{
    var principal = document.getElementById("principal").value;

    if(principal == "" || principal <= 0)//checking whether the value is a positive integer and not a string
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;

    var dateNow = new Date();//No of Years" is converted into an actual year
    var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);
    
    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "If you deposit " + "<span class='highlight'>" + principal + "</span>"  + ", <br> at an interest rate of "+ "<span class='highlight'>" + rate + "</span>%." + "<br> You will receive an amount of " + "<span class='highlight'>" + interest + "</span>" + ", <br> in the year " + "<span class='highlight'>" + yearNow + "</span>";
}

function updateRate()
{
    var rateval = document.getElementById("rate");
    var output = document.getElementById("rate_display");
    output.innerHTML = rateval.value; // Display the default slider value

    // Update the current slider value 
    rateval.oninput = function() 
    {
        output.innerHTML = this.value;
    }  
}