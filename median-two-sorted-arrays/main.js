var findMedianSortedArrays = function (nums1, nums2) {
  const nums3 = nums1.concat(nums2).sort(function (a, b) { return a - b })

  if (nums3.length % 2 === 0) {
    const median = (nums3[(nums3.length / 2) - 1] + nums3[(nums3.length / 2)]) / 2;
    return median
  } else if (nums3.length % 2 !== 0) {
    const median = nums3[(Math.round(nums3.length / 2)) - 1]
    return median
  }

};
