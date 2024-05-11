test("Example", function(assert) 
{
  assert.propEqual(convertRomanToInteger("I"), {value: 1, message: '', result: true}, "TC-0");

  assert.propEqual(convertIntegrToRoman(10), {value: "X", message: '', result: true}, "TC-1");
  assert.propEqual(convertIntegerToRoman(0), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-2");
  assert.propEqual(convertIntegerToRoman(14), {value: "XIV", message: '', result: true}, "TC-3");
  assert.propEqual(convertIntegerToRoman(-14), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-4");
  assert.propEqual(convertIntegerToRoman(3999), {value: "MMMCMXCIX", message: '', result: true}, "TC-5");
  assert.propEqual(convertIntegerToRoman(4000), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-6");
  assert.propEqual(convertIntegerToRoman(1), {value: "I", message: '', result: true}, "TC-7");
  assert.propEqual(convertIntegerToRoman("XXX"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-8");
  assert.propEqual(convertIntegerToRoman("Ñ"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-9");
  assert.propEqual(convertIntegerToRoman("MMMCMXCIX"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-10");

  assert.propEqual(convertRomanToInteger("X"), {value: 10, message: '', result: true}, "TC-11");
  assert.propEqual(convertRomanToInteger("111"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-12");
  assert.propEqual(convertRomanToInteger("14"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-13");
  assert.propEqual(convertRomanToInteger("-XX"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-14");
  assert.propEqual(convertRomanToInteger("MMMCMXCIX"), {value: 3999, message: '', result: true}, "TC-15");
  assert.propEqual(convertRomanToInteger("MMMCMXCX"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-16");
  assert.propEqual(convertRomanToInteger("0"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-17");
  assert.propEqual(convertRomanToInteger("XLIII"), {value: 43, message: '', result: true}, "TC-18");
  assert.propEqual(convertRomanToInteger("Ñ"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-19");
  assert.propEqual(convertRomanToInteger("CCC"), {value: 300, message: '', result: true}, "TC-20");
});
