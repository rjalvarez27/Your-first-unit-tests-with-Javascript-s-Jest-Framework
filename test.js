// Euros dolares
test("1 euro es igual a 1.2 dolares", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); // 4.2 dolares
})


test("1 dolar es igual 127.9 yenes ", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen} = require('./app.js')
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(4.2)).toBe(537.18); 
})


test("1 yen es igual 0.8 libras", function(){
    // importo la funcion desde app.js
    const {fromYenToPound  } = require('./app.js')
    // hago mi comparacion (la prueba)
    expect(fromYenToPound (537.18)).toBe(429.744); 
})