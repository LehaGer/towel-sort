
// You should implement your task here.

module.exports = function towelSort (matrix) {

    let resultmatrix = [];

    let RightDir = true;

    if(matrix === undefined ) return [];
    
    for(let i = 0; i < matrix.length; i++){
        if(!Array.isArray(matrix[i])){
            resultmatrix.push(matrix[i]);
        }else{
            if(RightDir){
                for(let y = 0; y < matrix[i].length; y++){
                    resultmatrix.push(matrix[i][y]);
                }
            }else if(!RightDir){
                for(let y = matrix[i].length-1; y >= 0; y--){
                    resultmatrix.push(matrix[i][y]);
                }
            }
            submartix = [];
            RightDir = !RightDir;
        }
    }

    return resultmatrix;
}
