let result = 0;
let value = 0;

$(".number, .kare, .operator").on('click', function(event){
    let clickedButtonValue = event.target.value;
    if(value == 0) {
        value = clickedButtonValue;
        document.getElementById("result").value = value;
    } else {
        if(clickedButtonValue == "plus") {
            value = value + "" + "+";
            document.getElementById("result").value = value;
        } else if(clickedButtonValue == "minus") {
            value = value + "" + "-";
            document.getElementById("result").value = value;
        } else if(clickedButtonValue == "slash") {
            value = value + "" + "/";
            document.getElementById("result").value = value;
        } else if (clickedButtonValue == "multiply") {
            value = value + "" + "*";
            document.getElementById("result").value = value;
        } else if(clickedButtonValue == "dot") {
            value = value + "" + ".";
            document.getElementById("result").value = value;
        } else if(clickedButtonValue == "C") {
            result = 0;
            value = 0;
            document.getElementById("result").value = result;
        } else if(clickedButtonValue == "equal") {
            if(value.includes("+")) {
                let x;
                let y;
                var indexOf = value.indexOf("+");
                x = parseInt(value.substring(0, indexOf));
                y = parseInt(value.substring(indexOf +1 , value.length));

                result = x + y;
                value = result;
                document.getElementById("result").value = result;
            } else if(value.includes("-")) {
                let x;
                let y;
                var indexOf = value.indexOf("-");
                x = parseInt(value.substring(0, indexOf));
                y = parseInt(value.substring(indexOf +1 , value.length));

                result = x - y;
                value = result;
                document.getElementById("result").value = result;
            }else if(value.includes("/")) {
                let x;
                let y;
                var indexOf = value.indexOf("/");
                x = parseInt(value.substring(0, indexOf));
                y = parseInt(value.substring(indexOf +1 , value.length));

                result = x / y;
                value = result;
                document.getElementById("result").value = result;
            }else if(value.includes("*")) {
                let x;
                let y;
                var indexOf = value.indexOf("*");
                x = parseInt(value.substring(0, indexOf));
                y = parseInt(value.substring(indexOf +1 , value.length));

                result = x * y;
                value = result;
                document.getElementById("result").value = result;
            }
            document.getElementById("result").value = result;
        } else {
            value = value + "" + clickedButtonValue;
            document.getElementById("result").value = value;
        }
    }
});
