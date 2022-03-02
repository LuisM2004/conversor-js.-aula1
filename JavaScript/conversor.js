document.getElementById('clear').onclick = clearForm;

const c = document.getElementById("celsius");
const f = document.getElementById("fahrenheit");
const k = document.getElementById("kelvin");
const r = document.getElementById("rankine");

const inputs = document.getElementsByClassName("input");

for(let i = 0; i < inputs.length; i++){
    let input = inputs[i];

    input.addEventListener("input", function (e){
        let value = parseFloat(e.target.value);

        document.getElementById('clear').onclick = clearForm;

        switch(e.target.name){
            case "celsius":
                f.value = value * 1.8 + 32;
                k.value = value + 273.15;
                r.value = (value + 273.15) * 1.8;
            break;
            case "fahrenheit":
                c.value = (value - 32) / 1.8;
                k.value = value - 32 * 1.8 + 273;
                r.value = value + 459.67;
                break;
            case "kelvin":
                c.value = value - 273.15;
                f.value = ((value - 273.15) * 1.8) + 32;
                r.value = value * 1.8
            break;
            case "rankine":
                c.value = (value / 1.8) - 273.15;
                f.value = value - 459.67;
                k.value = value / 1.8;
            break;

        }
       
    });

    function clearForm(){
        document.getElementById("celsius").value = "";
        document.getElementById("fahrenheit").value = "";
        document.getElementById("kelvin").value = "";
        document.getElementById("rankine").value = "";
    }

}