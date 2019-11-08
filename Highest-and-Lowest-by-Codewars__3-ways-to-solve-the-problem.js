function highAndLow(numbers) {
  // way №1

  let numbersArr = numbers.split(" ");
  let max = Math.max.apply(null, numbersArr);
  let min = Math.min.apply(null, numbersArr);

  return max + " " + min;

  // or way №2
  //     let numbersArr = numbers.split(' ');
  //     let decreasingArr = numbersArr.sort((a, b) => b - a);
  //     return (decreasingArr[0] + ' ' + decreasingArr[decreasingArr.length - 1]);

  // or way №3
  //      let numbersArr = numbers.split(' ');

  //      let min = numbersArr[0];
  //      let max = numbersArr[0];

  //     for (let i = 0; i < numbersArr.length; i++) {
  //         if (+max < numbersArr[i]) {
  //           max = numbersArr[i];

  //         }

  //         if (+min > numbersArr[i]) {
  //           min = numbersArr[i];

  //         }

  //     }

  //      return (max + ' ' + min);
}
