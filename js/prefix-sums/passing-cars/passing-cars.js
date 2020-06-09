
const passingCars = (A) => {
    
    let result = 0;
    let zeroes = 0;
    
    for( let i = 0; i < A.length; i++) {
        if(A[i] === 0) {
            zeroes += 1;
        } 
        
        if(A[i] === 1) {
        result += zeroes;
            if (result > 1000000000) {
                result = -1
                break;
            }
        }
    }
    return result;
}

module.exports = {
  passingCars
}
