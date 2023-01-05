var myStr = "he11o123";
//final output should be like this : ["heo",8]

let bag = "";
let sum = 0;
for (let i = 0; i < myStr.length; i++) {
  if (isNaN(myStr[i])) {
    bag += myStr[i];
  } else {
    sum += Number(myStr[i]);
  }
}
//console.log(bag,sum)



var aObj = { B: 25, A: 22 };
var bObj = { D: 90, E: 30, A: 10 };
//Output should be like this  {"A":32,"B":25,"D":90,"E":30}

let tempObj = {};
for (let k in aObj) {
  for (let l in bObj) {
    if (k == l) {
      tempObj[k] = aObj[k] + bObj[l];
    } else {
      tempObj[k] = aObj[k];
      tempObj[l] = bObj[l];
    }
  }
}
console.log(JSON.stringify(tempObj));
