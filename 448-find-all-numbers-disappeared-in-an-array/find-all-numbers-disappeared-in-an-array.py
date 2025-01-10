class Solution(object):
    def findDisappearedNumbers(self, nums):
        res = list(range(1, len(nums) + 1))
        for num in nums:
            res[num - 1] = False
        
        return list(filter(None, res))
