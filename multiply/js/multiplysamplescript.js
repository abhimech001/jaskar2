function multiplyNum(a, b) {
	
	if(typeof a === 'number' && typeof b === 'number'){
		return a*b;
	}
	else {
		return "value for a and b is not define";
	}
}