'use strict';
console.log('Замыкание');

const z = 5;
const closeOne = () => {
  const x = 10;

  const closeTwo = (y) => {

    const closeThree = () => {
      // const y = 15;
      return x + y;
    };
    // console.dir(closeThree);

  return x + y + closeThree();
  };

  // console.dir(closeTwo);


  return closeTwo(25);
};

console.log(closeOne());




const double = (x) => {// функция высшего порядка (возвращает функцию); также является локальной функцией
  return () => {  // является функцией замыкания
    console.log(x * x);
  };
}

const pow = double(10);
const pow2 = () => {
  console.log(x * x);
};

console.dir(pow);
console.dir(pow2);
// если функция находится в аргументах, то это callback
// если в результате то это фабрика функций на замыкании

const bar = (x) => {
  const y = 'II замыкание'
  return (z) => {
    console.log(x, y, z);
  };
};

 const foo = bar('I замыкание');
foo('III не замкнут');


const par = (a) => (b) => (c) => a + b + c;
// Цепочка замыканий chane
const poo1 = par(5);
console.log('poo1', poo1);

const poo2 = poo1(15);
console.log('poo2', poo2);

const poo3 = poo2(35);
console.log('poo3', poo3);

// Цепочка замыканий сокращенно

const poo0 = par(5)(15)(35);
console.log('poo0', poo0);


// IFFI Функции 1
(
  function() {

  const isNumber = (x) => {
      if (!Number.isNaN(parseFloat(x)) && isFinite(x)) {
        return +x;
      } else {
        return null;
      }
    };


    const sum = (a) => {
      a = isNumber(a);
      if (a) {
        return (b) => a + b;
      } else {
        return null;
      }
    };
    window.factorySum = sum;
    console.log(sum(3)(2));

  }
)();

window.factorySum();
const sumFive = window.factorySum(5);
console.log("-> sumFive", sumFive(4));



// IFFI Функции 2
const factory = (
  () => {

    const sum = () => {
    }
    return {
      sum,
    }

  }
)();
const IFFI = factory.sum(5);

window.factory = (
  () => {
    const sum = () => {
    }
    return {
      sum,
    }

  }
)();
const IFFI2 = window.factory.sum(5);

