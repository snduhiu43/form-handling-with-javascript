function analyzeStudentsMarks(num1, num2, num3, num4, num5){
    let total = num1 + num2 + num3 + num4 + num5
    let average = total / 5

    return{
        total: total,
        average: average
    }
}

console.log(analyzeStudentsMarks(32, 45, 31, 57, 62));

