function sum(x,y){
  var result = x + y;
//  console.log('"The sum of ' + x + ' and ' + y + ' is ' + result + '."');
  return x + y;
}

function multiply(x,y){
  var result = x * y;
//  console.log('"The product of ' + x + ' and ' + y + ' is ' + result + '."');
  return x * y;
}

function sumAndMultiply(x, y, z) {
  var output = [];
  output.push(sum(sum(x,y),z));
  output.push(multiply(multiply(x,y),z));
  console.log(x + ' and ' + y + ' and ' + z + ' sum to ' + output[0] + '.');
  console.log('The numbers ' + x + ' and ' + y + ' and ' + z + ' have a product of ' + output[1] + '.');
  return output;
}
