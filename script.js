let lastOperand = 0;
let operation = null;
//inputWindow = '';

const inputWindow = document.querySelector('#inputWindow');

const btn1 = document.querySelector('#btn_1');
btn1.addEventListener('click', function () {
    inputWindow.value += '1';
})
const btn2 = document.querySelector('#btn_2');
btn2.addEventListener('click', function () {
    inputWindow.value += '2';
})
const btn3 = document.querySelector('#btn_3');
btn3.addEventListener('click', function () {
    inputWindow.value += '3';
})
const btn4 = document.querySelector('#btn_4');
btn4.addEventListener('click', function () {
    inputWindow.value += '4';
})
const btn5 = document.querySelector('#btn_5');
btn5.addEventListener('click', function () {
    inputWindow.value += '5';
})
const btn6 = document.querySelector('#btn_6');
btn6.addEventListener('click', function () {
    inputWindow.value += '6';
})
const btn7 = document.querySelector('#btn_7');
btn7.addEventListener('click', function () {
    inputWindow.value += '7';
})
const btn8 = document.querySelector('#btn_8');
btn8.addEventListener('click', function () {
    inputWindow.value += '8';
})
const btn9 = document.querySelector('#btn_9');
btn9.addEventListener('click', function () {
    inputWindow.value += '9';
})
const btn0 = document.querySelector('#btn_0');
btn0.addEventListener('click', function () {
    inputWindow.value += '0';
})

const sum = document.querySelector('#btn_sum');
sum.addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    //inputWindow.value = '';
    //inputWindow.value = '1+';  //OR?? //''; OR ?? To look as 1+1=2
    inputWindow.value = '';
    //CHECK IN CONSOLE
    console.log(lastOperand);
    console.log(operation);
})

const dif = document.querySelector('#btn_dif');
dif.addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'dif';
    inputWindow.value = '';
})

const mlt = document.querySelector('#btn_mlt');
mlt.addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'mlt';
    inputWindow.value = '';
})

const dvd = document.querySelector('#btn_dvd');
dvd.addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'dvd';
    inputWindow.value = '';
})

const sqrt = document.querySelector('#btn_sqrt');
sqrt.addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sqrt';
    inputWindow.value = '';
})



const calc = document.querySelector('#btn_calc');
calc.addEventListener('click', function () {
    if (operation === 'sum') {
        const result = lastOperand + parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
        console.log(result)
    }
    if (operation === 'dif') {
        const result = lastOperand - parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
        console.log(result)
    }
    if (operation === 'mlt') {
        const result = lastOperand * parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
        console.log(result)
    }
    if (operation === 'dvd') {
        const result = lastOperand / parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
        console.log(result)
    }
    if (operation === 'sqrt') {
        const result = Math.sqrt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
        console.log(result)
    }
})


/*calc.removeEventListener('click', function () {
    if (operation === 'sum') {
        const result = lastOperand + parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
        console.log(result)
    }
})
calc.addEventListener('click', function () {
    if (operation === 'dif') {
        const result = lastOperand - parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
        console.log(result)
    }
})*/

const btnClr = document.querySelector('#btn_clr');
btnClr.addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
    //CLEAN THE CONSOLE
    //console.clear();
})

// OLD FASHIONED CODE:

/*const inputWindow = document.getElementById('inputWindow');

document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
})

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})*/




















