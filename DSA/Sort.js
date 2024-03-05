const array = [-12, 33, 4, 0, -9, -2, 101, -99];

// use for loop
// create empty array

const SortFunct = (value) => {
   for (let i = 0; i < value.length; i++) {
      // console.log("Values", value[i]);
      for (let j = i + 1; j < value.length; j++) {
         if (value[i] < value[j]) {
            // Swap values if they are in the wrong order
            const temp = value[i];
            value[i] = value[j];
            value[j] = temp;
         }
         //   return value;
      }
   }
};

SortFunct(array);
console.log(array);
