const casual = require('casual');

    // casual.define('dados', function() {
    //     return {
    //         nome: casual.name,
    //         sobrenome: casual.last_name,
    //         rua: casual.street,
    //         pais: casual.country,
    //         CEP: casual.zip(digits = [5, 9])
    //     };
    // });
    
    // var dados = casual.dados;
    // console.log('dados',dados);

for (let i; i<=10; i++){
    {casual.define('dados', function() {
        return {
            nome: casual.name,
            sobrenome: casual.last_name,
            rua: casual.street,
            pais: casual.country,
            CEP: casual.zip(digits = [5, 9])
        };
    });
    
    var dados = casual.dados;
    console.log('dados',dados);
    } 
}
