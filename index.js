function processData(input) {
  //Enter your code here
if(input.length % 2 !== 0 ){
  console.log(0)
}
  console.log(1)

} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
 processData(_input);
});
