// importar la función sum del archivo app.js
/*const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});*/


test("One euro should be 1.206 dollars", function(){
    
    const { fromEuroToDollar } = require('./app.js')
    
    
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("5 dolares son 532.9166666666667 yen ", function(){
   
    const { fromDollarToYen} = require('./app.js') 
    
    expect(fromDollarToYen(5)).toBe(532.9166666666667); 
})


test("1000 yen son 6.254886630179827pound ", function(){ 
    
    const { formYenToPound} = require('./app.js')
    
    expect(formYenToPound(1000)).toBe(6.254886630179827); 
})


