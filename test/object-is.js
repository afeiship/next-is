var nxIs = require('next-is');


test('test object is: +0/-0 ___ 0', () => {
  var rs1 = nxIs(+0, 0);
  var rs2 = nxIs(-0, 0);

  expect(rs1).toBe(true);
  expect(rs2).toBe(false);
});
