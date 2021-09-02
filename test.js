  const readline = require('readline');
  const world = [
    ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
    ["|" , " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|"],
    ["|" , " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|"],
    ["|" , " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|"],
    ["|" , " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|"],
    ["|" , " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|"],
    ["|" , " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|"],
    ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"]
  ]
  var x = 10;
  var y = 3;

  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });

  const generate = () =>  {
    world.map((row,yIndex) => { 
      row.map((tile, xIndex) => {
        if(xIndex === x && yIndex === y){
          process.stdout.write("P")
        }
        if(xIndex !== x){

        process.stdout.write(tile)
        }
      })
      
      process.stdout.write(String(row.length));
      
      process.stdout.write('\n')
    } 
    )
  }

  const move = (dir) => {
    if(dir === "n" && y > 0) {
      y = y-1;
    }
    if(dir === "s" && y < world.length - 1) {
      y = y+1;
    }
    if(dir === "w" && x > 0) {
    x = x-1;
  }
  if(dir === "e" && x < world[y].length - 1) {
    x = x+1;
  }
}
const action = () => {
rl.question("direction? (n,s,w,e)", (answer) => {
    move(answer)
    generate()
    console.log(x,y)

    action()
  })
}
const main = () => {
  generate()
  action()
}

main();
