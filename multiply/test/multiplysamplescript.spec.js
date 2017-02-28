describe('This is test suite',function() {
	it('This is test case with integer',function() {
		var a = multiplyNum(2,5);
		expect(a).toBe(10);
	});	
	});

describe('This is test suite with null values',function() {
	it('This is test case with integer',function() {
		var a = multiplyNum();
		expect(a).toBe();
	});	
	});

describe('This is test suite with null values',function() {
	it('This is test case with integer',function() {
		var a = multiplyNum('x','x');
		expect(a).toBe();
	});	
	});
