module.exports = function reverse (n) {
  let number;
  number=n.toString(); // converts n into a String
  number=number.split(''); // converts The String into an Array
  number=number.reverse(); // reverses the order of the array
  number=number.join(''); // reassembles the reversed characters into a String
    return parseFloat(number); // converts number into a float from a String and return result
}
