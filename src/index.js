
// You should implement your task here.
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}


module.exports = function towelSort (matrix) {
  if (typeof matrix === 'undefined' || matrix.length === 0) {
     return [];
  }
  let arr=[];
   for (let i=0; i<matrix.length;i++){
    m=matrix[i];
    //console.log('m=',m);
    if((i+1)%2===0){
      m=m.reverse();
    }
    
    for(let j=0;j<m.length;j++){
      arr.push(m[j]);
    }
  }
  return arr;
}
