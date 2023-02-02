const celcius1Input = document.getElementById("celcius1");
const fahrenheit1Input = document.getElementById("fahrenheit1");
const kelvin1Input = document.getElementById("kelvin1");

const celcius2Input = document.getElementById("celcius2");
const fahrenheit2Input = document.getElementById("fahrenheit2");
const kelvin2Input = document.getElementById("kelvin2");


const inputs =document.getElementsByClassName("input");

for(let i =0; i<inputs.length ; i++)
{
    let input = inputs[i];

    input.addEventListener("input",function(e){
        let value = parseFloat(e.target.value);

        switch(e.target.name){
            case"celcius1":
            fahrenheit1Input.value = (value*1.8) + 32;
            break;
            case"celcius2":
            kelvin2Input.value = value + 273.15;
            break;
            case "fahrenheit1":
                celcius1Input.value = (value-32) / 1.8;
                break;
            case "fahrenheit2":
                kelvin1Input.value =((value-32) / 1.8) + 273.15;
                break;
            case "kelvin1":
                    fahrenheit2Input.value=((value - 273.15) * 1.8) + 32;
                 break;
            case "kelvin2":
                    celcius2Input.value= value - 273.15;
                 break;
        }

    });
}