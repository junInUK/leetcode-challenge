console.log('sort colors');

function sortColors(nums: number[]): void {
    for (let j = nums.length; j>=1; j--){
        for (let i = 0; i<j; i++) {
            if (nums[i]! > nums[i+1]!) {
                let temp;
                temp = nums[i];
                nums[i] = nums[i+1]!;
                nums[i+1] = temp!;                
            }
        }
    }   
}

const nums1 = [2,0,2,1,1,0];
const nums2 = [2,0,1];
sortColors(nums1);
console.log(nums1);

sortColors(nums2);
console.log(nums2);