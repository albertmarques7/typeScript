"use strict";
var casting;
(function (casting) {
    let idade = 25;
    idade.toFixed(); //castingfunção para numericos add casas decimais
    idade.length;
    idade.forEach(x => {
        console.log(x);
    });
    // para passar de numero para string precisa ser passado para unknown
    let nome = 35;
})(casting || (casting = {}));
