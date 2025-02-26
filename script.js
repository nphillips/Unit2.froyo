const froyoInput = prompt(
  "Enter froyo flavors (comma-separated)",
  "vanilla,vanilla,vanilla,chocolate,chocolate,neopolitan,peanutbutter,vanilla"
);

let flavors = froyoInput.split(",");

let flavorCounts = {};

for (let flavor of flavors) {
  if (flavor in flavorCounts) {
    flavorCounts[flavor] += 1;
  } else {
    flavorCounts[flavor] = 1;
  }
}

console.log(flavorCounts);
