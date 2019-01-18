const sum = require('./sum');
// 1 + 2 เท่ากับ 3
test('1 + 2 เท่ากับ 3', ()=> {
  expect(sum(1,2)).toBe(3);
});

// 20 + 1 เท่ากับ 21
test('20 + 1 เท่ากับ 21', ()=> {
  expect(sum(20,1)).toBe(21);
});

// 2 + 5 เท่ากับ 7
test('2 + 5 เท่ากับ 7', ()=> {
  expect(sum(2,5)).toBe(7);
});

// ทำอีก 3 อัน โดยการพิมพ์เอง อย่า copy

// -17 + 3  เท่ากับ -14
test('-17 + 3 เท่ากับ -14', ()=> {
  expect(sum(-17,3)).toBe(-14);
});

// -4 + (-4) เท่ากับ -8
test('-4 + (-4) เท่ากับ -8', ()=> {
  expect(sum(-4,-4)).toBe(-8);
});

// 30 + (-15) เท่ากับ 15
test('30 + (-15) เท่ากับ 15', ()=> {
  expect(sum(30,-15)).toBe(15);
});