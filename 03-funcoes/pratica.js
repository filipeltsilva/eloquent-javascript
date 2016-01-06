// Definição de Função
var square = function(x) {
    return x * x;
};
console.log(square(12));

// Funções podem possuir um parâmetro, vários parâmetros ou nenhum parâmetro
var makeNoise = function() {
    console.log("Pling");
};
makeNoise();

var power = function(base, exponent) {
    var result = 1;

    for (var count = 0; count < exponent; count++) {
        result *= base;
    };

    return result;
};
console.log(power(2, 10));

// Escopo global e local
var x = "outside";

var f1 = function() {
    var x = "inside f1";
};
f1();
console.log(x);

var f2 = function() {
    var x = "inside f2";
};
f2();
console.log(x);

// Escopo aninhado (função dentro de função)
var landscape = function() {
    var result = "";

    var flat = function(size) {
        for (var count = 0; count < size; count++)
            result += "_";
    };

    var mountain = function(size) {
        result += "/";
        for (var count = 0; count < size; count++)
            result += "'";

        result += "\\";
    };

    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(1);
    return result;
};
console.log(landscape());

// Função recursiva
function power(base, exponent) {
    if (exponent  == 0)
        return 1;
    else
        return base * power(base, exponent - 1);
}
console.log(power(2, 3));