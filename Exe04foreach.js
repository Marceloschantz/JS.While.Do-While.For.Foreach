const tabuada = [];

for(let multiplicador = 1; multiplicador <=10; multiplicador++){
    const resultado = 9 * multiplicador;
    tabuada.push(`9 x ${multiplicador} = ${resultado}`);
}
tabuada.forEach(function(item){
    console.log(item);
});