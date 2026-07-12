
function plusOneNotWork(digits: number[]): number[] {
    const reversedDigits = digits.toReversed();
    console.log(reversedDigits);
    let sum = 0;
    for (let i = 0; i< digits.length; i++) {
        sum += reversedDigits[i]!* Math.pow(10, i);
        console.log(`sum: ${sum}, i: ${i}`);
    }
    console.log(sum);
    let sumPlusOne = sum + 1;
    console.log(sumPlusOne);
    const sumPlusOne2Array: number[] = [];
    while(sumPlusOne > 0) {
        let num = sumPlusOne%10;
        sumPlusOne2Array.push(num);
        sumPlusOne = (sumPlusOne - num)/10;
    }
    return sumPlusOne2Array.toReversed();    
};

function plusOneSlowOne(digits: number[]): number[] {
    const reversedDigits = digits.toReversed();
    const newDigits: number[] = [];
    let newNum: number;
    let carry: number = 0;
    if (reversedDigits[0]!<9) {
        newDigits.push(reversedDigits[0]!+1);
    } else {
        newDigits.push(0);
        carry = 1;
    }
    for(let i=1;i<reversedDigits.length;i++){
        if (reversedDigits[i]! + carry <10) {
            newNum = reversedDigits[i]! + carry;
            carry = 0;
        } else {
            newNum = 0;
            carry = 1;
        }
        newDigits.push(newNum);
    }
    if (carry === 1) {
        newDigits.push(1);
    }
    return newDigits.toReversed();
}

function plusOne(digits: number[]): number[] {
    const result = [...digits]; // one copy, to avoid mutating input
    
    for (let i = result.length - 1; i >= 0; i--) {
        if (result[i]! < 9) {
            result[i]!++;
            return result; // no carry — done immediately
        }
        result[i] = 0; // it was 9, becomes 0, carry continues
    }
    
    // if we get here, every digit was 9 (e.g. [9,9,9] → [1,0,0,0])
    result.unshift(1);
    return result;
}

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));