function MissingDigit(str) { 

    // code goes here
    // Seperating the 2 sides since they are always distinguished by an equal sign
    const seperatedEquation = String(str).split('=') 
    // Array needs to always be of size 2 
    if(seperatedEquation.length != 2) {
      return null;
    }
  
    let leftHandSide = seperatedEquation[0];
    let rightHandSide = seperatedEquation[1];
  
  
    // check if a side does not contain an x compute it directly
    if(!leftHandSide.includes('x')) {
      leftHandSide = computeSide(leftHandSide)
      return shitNonXValuesToOtherSide(rightHandSide, leftHandSide);
    } else {
      rightHandSide = computeSide(rightHandSide)
      return shitNonXValuesToOtherSide(leftHandSide, rightHandSide);
    }
  }
  
  function computeSide(equation) {
    let operatorType = '';
    let operator = null;
  
    if(String(equation).includes('-')) {
      operatorType = '-'
      operator = (a, b) => a - b
  
    } else if(String(equation).includes('*')) {
      operatorType = '*'
      operator = (a, b) => a * b
  
    } else if(String(equation).includes('/')) {
      operatorType = '/'
      operator = (a, b) => a / b
  
    } else if(String(equation).includes('+')) {
      operatorType = '+'
      operator = (a, b) => a + b
    } else {
      // This means only 1 value 
      return Number(equation)
    }
    
    let sideValues = String(equation).trim().split(operatorType);
    return sideValues.reduce((acc, currentValue) => operator(Number(acc), Number(currentValue)))
  
  }
  
  function shitNonXValuesToOtherSide(xSide, nonXSideValue) {
    let operatorType = null;
  
    if(String(xSide).includes('-')) {
      operatorType = '-'
    } else if(String(xSide).includes('*')) {
      operatorType = '*'
    } else if(String(xSide).includes('/')) {
      operatorType = '/'
    } else if(String(xSide).includes('+')) {
      operatorType = '+'
    } else {
      return getMissingValue(xSide, nonXSideValue)
    }
  
    const operatorOpposites = {
      '+': (a, b) => a - b,
      '-': (a, b) => a + b,
      '*': (a, b) => a / b,
      '/': (a, b) => a * b,
      '/1': (a, b) => b / a
    }
  
    let xString = null
    let nonXstring = null
  
    String(xSide).trim().split(operatorType).map((str) => {
      if(str.includes('x')) {
        xString = str
      } else {
        nonXstring = str;
  
        if(operatorType === '/' && xString == null) {
            operatorType = '/1'
        }
      }
      
    });
  
    const opFunction = operatorOpposites[operatorType]
  
    nonXSideValue = opFunction(nonXSideValue, Number(nonXstring));
    return getMissingValue(xString, nonXSideValue);
  }
  
  function getMissingValue(xString, correctValue) {
    xString = String(xString).trim()
    const xIndex = xString.indexOf('x');
  
    const valueString = Number(correctValue).toString()
    return xString.length == 1 ?  correctValue : valueString[xIndex]
  }
  
     
  // keep this function call here 
  console.log(MissingDigit(readline()));