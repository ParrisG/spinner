const numRev = 4; //just a random number of how many full revolutions I want the cursor to do
const spinArr = ["|", "/", "-", "\\"];
const halfRev = (halfspins) => {
  let delay = 100;
  for (let j = 0; j < halfspins; j++) {
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        process.stdout.write(`\r${spinArr[i]}   `);
      }, (delay + (200 * i)));
    }
    delay += 800;
  }
};
halfRev(numRev * 2);
