function searchInsert(nums: number[], target: number): number {
    const maxIndex: number = nums.length -1;
    if (target > nums[maxIndex])
        return maxIndex + 1;
    if (target < nums[0])
        return 0;
    let startIndex: number = 0; 
    let endIndex: number = nums.length - 1;
    
    while(startIndex <= endIndex) {
        const middleIndex = Math.floor((startIndex + endIndex)/2);
        if (nums[middleIndex] < target) {
            startIndex = middleIndex + 1;
        } else if(nums[middleIndex] > target) {
            endIndex = middleIndex -1;
        } else {
            return middleIndex;
        }  
    }
    return startIndex;
};

const nums1 = [1,3,5,6];
const target1 = 5;
console.log(searchInsert(nums1, target1));

const target2 = 2;
console.log(searchInsert(nums1, target2));
const target3 = 7;
console.log(searchInsert(nums1, target3));
const target4 = -1;
console.log(searchInsert(nums1, target4));