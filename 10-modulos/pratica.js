// FUNÇÕES PODEM CRIAR UM NOVO ESCOPO DE VARIÁVEIS
var names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function dayName(number) {
    return names[number];
}

console.log(dayName(1));

// NO MÓDULO ACIMA, A FUNÇÃO DAYNAME FAZ PARTE DA INTERFACE, MAS A VARIÁVEL NAMES NÃO.
// VISANDO MELHORAR A CONSISTÊNCIA DO CÓDIGO, PODE-SE MUDAR A VARIÁVEL NAMES PARA DENTRO DA
// FUNÇÃO DAYNAME, REMOVENDO-A DO ESCOPO GLOBAL.
var dayName = function() {
    var names = ['Sunday,', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return function(number) {
        return names[number];
    };
}();

console.log(dayName(3));