// Sample -> braces(2, ['{}[]()', '{[}]}'])

var validBraces = [['(', ')'], ['{', '}'], ['[', ']']];

function braces(bracesCount, arrayOfBraces){
    if(bracesCount != arrayOfBraces.length){
        console.log(arrayOfBraces.length)
        return 'Please enter valid input data';
    }
    else{
        return bracesAreValid(arrayOfBraces);
    }

}

function bracesAreValid(arrayOfBraces){
    var stack = [];
    var result = [];
	var isValid = true;

    for(let currentBracesGroup of arrayOfBraces){
        isValid = true;
        for(let currentBrace of currentBracesGroup){
            if(isOpenBrace(currentBrace)){
                stack.push(currentBrace);
            }
            else{
                var topElementOfStack = stack.pop();
                if(!isMatch(topElementOfStack, currentBrace)){
					isValid = false;
                }
            }
        }
		if(isValid){
			result.push('YES');
        }
        else{
            result.push('NO');
        }
    }

    return result;
}

function isOpenBrace(brace){
    for (let i = 0; i < validBraces.length; i++) {
        if (validBraces[i][0] === brace) {
          return true;
        }
    }
    return false;
}

function isMatch(topElement, closedBrace) {
    for (let i = 0; i < validBraces.length; i++) {
      if (validBraces[i][0] === topElement && validBraces[i][1] === closedBrace) {
        return true;
      }
    }
    return false;
  }
