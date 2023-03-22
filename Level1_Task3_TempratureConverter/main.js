const convertFahrenheit = () => {
    let celsius = (document.querySelector("#celsius").value);

    let fahrenheitResult = (1.8 * celsius) + 32;
    let a = fahrenheitResult.toFixed(2);

    document.querySelector("#celsius").value = celsius;
    document.querySelector("#fahrenheit").value = a;
}

const convertCelsius = () => {
    let fahrenheit = parseFloat(document.querySelector("#fahrenheit").value);

    let celsiusResult = (fahrenheit - 32) / 1.8;
    let b = celsiusResult.toFixed(2);

    document.querySelector("#celsius").value = b;
    document.querySelector("#fahrenheit").value = fahrenheit;
}

const reset = () => {
    document.querySelector("#celsius").value = " ";
    document.querySelector("#fahrenheit").value = " ";
}