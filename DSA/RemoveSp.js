const input = "SE@NW+E(L=L)";

// Function to remove special characters without using regex
const removeSpecialCharacters = (input) => {
   let result = "";
   for (let i = 0; i < input.length; i++) {
      const char = input.charAt(i);
      if (
         (char >= "A" && char <= "Z") ||
         (char >= "a" && char <= "z") ||
         char === " " ||
         (char >= "0" && char <= "9")
      ) {
         result += char;
      }
   }
   return result;
};

const result = removeSpecialCharacters(input);
console.log(result);
