function clearErrors() {
    for(var loopCounter = 0;
        loopCounter < document.forms["numberForm"].elements.length;
        loopCounter++) {

            if (document.forms["numberForm"].elements[loopCounter]
                .parentElement.className.indexOf("has-") != -1) {

                    document.forms["numberForm"].elements[loopCounter]
                        .parentElement.className = "form-group col-sm-8";
            }
    }
}

function validateItems() {
    clearErrors();

    var startingNumber = document.forms["numberForm"]["startingNumber"].value;
    var endingNumber = document.forms["numberForm"]["endingNumber"].value;
    var step = document.forms["numberForm"]["step"].value;

    if (startingNumber == "" || isNaN(startingNumber)) {
        alert("Starting number must be filled in with a number.");
        document.forms["numberForm"]["startingNumber"]
            .parentElement.className = "form-group col-sm-8 has-error";
        document.forms["numberForm"]["startingNumber"].value = "";
        document.forms["numberForm"]["startingNumber"].focus();
        document.getElementById("results").style.display = "none";
        return false;
    }

    if (endingNumber == "" || isNaN(endingNumber)) {
        alert("Ending number must be filled in with a number.");
        document.forms["numberForm"]["endingNumber"]
            .parentElement.className = "form-group col-sm-8 has-error";
        document.forms["numberForm"]["endingNumber"].value = "";
        document.forms["numberForm"]["endingNumber"].focus();
        document.getElementById("results").style.display = "none";
        return false;
    }

    if (parseInt(endingNumber) <= parseInt(startingNumber)) {
        alert("The ending number must be greater than the starting number.");
        document.forms["numberForm"]["endingNumber"]
            .parentElement.className = "form-group col-sm-8 has-error";
        document.forms["numberForm"]["endingNumber"].value = "";
        document.forms["numberForm"]["endingNumber"].focus();
        document.getElementById("results").style.display = "none";
        return false;
    }
    
    if (step == "" || isNaN(step) || step < 1) {
        alert("The step must be filled with in with a number greater than 0.");
        document.forms["numberForm"]["step"]
            .parentElement.className = "form-group col-sm-8 has-error";
        document.forms["numberForm"]["step"].value = "";
        document.forms["numberForm"]["step"].focus();
        document.getElementById("results").style.display = "none";
        return false;
    } 

    document.getElementById("results").style.display = "block";
    document.getElementById("startingNumberResult").innerText = startingNumber;
    document.getElementById("endingNumberResult").innerText = endingNumber;
    document.getElementById("stepResult").innerText = step;
    document.getElementById("evensResultList").innerHTML = 
        getEvensList(startingNumber, endingNumber, step)
            .join("<br />");

    return false;
}

function getEvensList(start, end, step) {
    var start = parseInt(start);
    var end = parseInt(end);
    var step = parseInt(step);
    var evensResultList = new Array();

    for (var loopCounter = start; loopCounter < end; loopCounter += step) {
        if (loopCounter % 2 == 0) {
            evensResultList.push(loopCounter);
        }
    }

    return evensResultList;
}