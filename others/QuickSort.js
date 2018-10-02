var quickSort = function(nums) {
    if(!nums.length)
        return [];
    
    var pivot = nums[nums.length-1], left = [], right = [];
    for(var i = 0; i < nums.length -1; i++) {
        if(nums[i] < pivot) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];

}
