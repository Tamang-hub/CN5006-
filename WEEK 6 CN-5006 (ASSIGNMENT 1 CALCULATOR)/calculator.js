import './App.css';
import React from 'react';

function Calculator() {
    //function to handle calculation
    function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result =0;


    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2; 
            break;
        case '/':
            result = num2 !== 0 ? num1/num2 : 'cannot divide by zero';
            break;           
        default:
            result ='Invalid Operation';
    }

    document.getElementById('result').innerText = 'result:' + result ;
}
return(
<div style={{ padding:'24px', border: '7px solid #ccc' , width:'240px',background:'pink'}} className="App">
<h2>Simple Calculator</h2> 
<input type="number" id="num1" placeholder="First Number" style={{ 
width: '100%', marginBottom: '19px' }} /> 
    <select id="operator" style={{ width: '100%', marginBottom: '19px' }}> 
        <option value="+">Add</option> 
        <option value="-">Subtract</option> 
        <option value="*">Multiply</option> 
        <option value="/">Divide</option> 
        </select> 
<input type="number" id="num2" placeholder="Second Number" style={{ 
width: '100%', marginBottom: '19px' }} /> 
<button onClick={calculate} style={{ width: '100%', padding: '12px', 
marginBottom: '19px' }}>
    Calculate
    </button>
    <p id="result" style={{ fontWeight: 'bold', fontSize: '14px' 
}}>Result:</p> 
</div>
);
}

export default Calculator;
