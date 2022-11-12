var buttons = document.getElementsByClassName("button");
var display = document.getElementById('display');
var str = "";
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var value = this.getAttribute("data-value");
        if (value == "AC") {
            str = "";
            display.innerText = "";
        }
        else if(value=='+/-'){
            if(!str.includes("+" || "-" || "*" ||"%")){
                var num=parseInt(str);
                num=-1*num;
                str=num;
                display.innerText=str;
            }
        }
        else if (value == '=') {
            var result = eval(str);
            str =result;
            display.innerText = str;
        }
        else {
            str += value;
            display.innerText = str;
        }
    });
}