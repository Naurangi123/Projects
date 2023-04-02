'use strict';

const tempreture = [3, -2, -6, -1, 'error', 9, 12, 17, 14, 9, 5];

const calcTemAmplitudeBug = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTemAmplitudeBug(tempreture);
console.log(amplitude);

// const measurKelvin = function () {
//   const measurment = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degrees celsius')),
//   };
//   // console.log(measurment);
//   console.table(measurment);

//   console.log(measurment.value);
//   // console.warn(measurment.value);
//   // console.error(measurment.value);

//   const kelvin = measurment.value + 273;
//   return kelvin;
// };
// //A)Identify the bug;
// console.log(measurKelvin());
