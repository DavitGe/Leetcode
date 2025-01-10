class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        prev_zero = prev_ones = 0
        result = 0

        for elem, it in groupby(nums):
            length = sum(1 for _ in it)
            if elem == 0:
                prev_zero = length
            else:
                result = max(result, length + 1)
                if prev_zero == 1:
                    result = max(result, prev_ones + 1 + length)
                prev_ones = length
        
        if prev_zero == 0:  # case of full of 1
            return len(nums)
        if prev_ones == 0:  # case of full of 0
            return 1
        return result