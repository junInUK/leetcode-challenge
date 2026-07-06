function removeElement(nums: number[], val: number): number {
    let k = 0;
    const newNums: number[] = [];
    nums.forEach((num) => {
        if (num !== val) {
            newNums.push(num); 
        }
    })
    k = newNums.length;
    let i = 0;
    newNums.forEach((num) => nums[i++] = num);
    return k;
} 

const nums = [3,2,2,3];
const val = 3;
console.log(removeElement(nums, val));
console.log(nums);