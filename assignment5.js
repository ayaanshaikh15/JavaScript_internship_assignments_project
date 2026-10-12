// Assignment 5: Function Architecture and Scope

// Standard function with default values
function areaStandard(length = 5, width = 4) {
  return length * width;
}

// Arrow function with default values
const areaArrow = (length = 5, width = 4) => length * width;

console.log("Standard Function Area (Default 5x4): " + areaStandard());
console.log("Arrow Function Area (Custom 10x3): " + areaArrow(10, 3));

// Block scope
{
  let blockVar = "inside block";
}

try {
  console.log(blockVar);
} catch (error) {
  console.log("Scope Test Error: " + error.name + ": " + error.message);
}
