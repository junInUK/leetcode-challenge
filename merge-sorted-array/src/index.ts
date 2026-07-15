console.log('merge sorted array');

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
     const newNums: number[] = [...nums1];
    let j = 0; // 指向 nums1 的有效数据 (最多到 m-1)
    let k = 0; // 指向 nums2 的数据 (最多到 n-1)
    
    if (n === 0) {
        return;
    }
    
    for (let i = 0; i < m + n; i++) {
        // 核心修改：判断 nums1 的有效数据是不是还没用完，并且 nums2 还没用完
        if (j < m && k < n) {
            // 两个数组都还有数，正常比较大小
            newNums[i] = nums1[j]! <= nums2[k]! ? nums1[j++]! : nums2[k++]!;
        } else if (j < m) {
            // nums2 已经全部倒完了，剩下的全是 nums1 的
            newNums[i] = nums1[j++]!;
        } else {
            // nums1 已经全部倒完了，剩下的全是 nums2 的
            newNums[i] = nums2[k++]!;
        }
    }
    
    // 把临时数组写回原数组
    for (let i = 0; i < m + n; i++) {
        nums1[i] = newNums[i]!;
    }
}

function mergeFromLarge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1;
    let j = n - 1;
    let k = m + n -1；

    while (i >= 0 && j >= 0) {
        // 谁大，谁就放到 nums1 的最后面
        if (nums1[i]! > nums2[j]!) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // 如果 nums2 还有剩余元素（说明 nums2 剩下的都比 nums1 小）
    // 直接把它们抄到 nums1 的前面。
    // (注意：如果是 nums1 剩下了，它本来就在正确的位置，不需要处理)
    while (j >= 0) {
        nums1[k] = nums2[j]!;
        j--;
        k--;
    }
}