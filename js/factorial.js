exports.factorial = (num) => {
    let answer = 1;
    if (num < 2) {
        return num;
    }

    for (let i = num; i>= 2; i--) {
        answer = answer * i;
    }

    return answer;

};

// console.log(exports.factorial(8))