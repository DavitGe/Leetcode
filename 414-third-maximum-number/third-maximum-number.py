class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        sortedNums = sorted(set(nums))
        length = len(sortedNums)
        if length >= 3:
            return sortedNums[length - 3]
        else:
            return sortedNums[length - 1]
        
