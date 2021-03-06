const minus = require('./minus');
// 22 - 3 เท่ากับ 19
test('22 - 3 เท่ากับ 19', ()=> {
    expect(minus(22, 3)).toBe(19);
});

// 8 - 13  เท่ากับ -5
test('8 - 13  เท่ากับ -5', ()=> {
    expect(minus(8, 13)).toBe(-5);
});

// -19 - (-11)  เท่ากับ -8
test('-19 - (-11)  เท่ากับ -8', ()=> {
    expect(minus(-19, -11)).toBe(-8);
});

//  3 - 3  เท่ากับ 0
test('3 - 3  เท่ากับ 0', ()=> {
    expect(minus(3, 3)).toBe(0);
});

//  12 - (-3)  เท่ากับ 15
test('12 - (-3)  เท่ากับ 15', ()=> {
    expect(minus(12, -3)).toBe(15);
});