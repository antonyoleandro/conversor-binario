function convert() {
    const binary = document.getElementById("binario-input").value;
    if (binary === "") return alert("Por favor, digite um número binário");
    binary.split("").map((char) => {
        if (char !== "0" && char !== "1") return alert("Por favor, digite um número binário");
    });
    const decimal = parseInt(binary, 2);
    document.getElementById("decimal-input").value = decimal;
    return true;
}