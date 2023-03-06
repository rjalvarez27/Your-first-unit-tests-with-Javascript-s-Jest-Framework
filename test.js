test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromYenToPound  } = require('./app.js').default
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound (3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})