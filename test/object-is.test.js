var nxIs = require('next-is');

test('test object is: +0/-0 ___ 0', () => {
  var rs1 = nxIs(+0, 0);
  var rs2 = nxIs(-0, 0);

  expect(rs1).toBe(true);
  expect(rs2).toBe(false);
});

test('test object is:NaN', () => {
  var rs1 = nxIs(NaN, NaN);
  expect(rs1).toBe(true);
});

test('test object is: PrimitiveValue', () => {
  var rs1 = nxIs(true, true);
  var rs2 = nxIs(null, null);
  var rs3 = nxIs(1, 1);
  var rs4 = nxIs('1', 1);
  var rs5 = nxIs('', false);
  var rs6 = nxIs(null, undefined);

  expect(rs1).toBe(true);
  expect(rs2).toBe(true);
  expect(rs3).toBe(true);
  expect(rs4).toBe(false);
  expect(rs5).toBe(false);
  expect(rs6).toBe(false);
});
