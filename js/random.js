function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let random = {
  
id : function(){
  
  return '_' + Math.random().toString(36).substr(2, 9);
  
}
  
}


export { random }