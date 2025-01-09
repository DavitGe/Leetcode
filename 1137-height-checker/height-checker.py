class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        expect = sorted(heights)
        miss = 0
        for i in range(len(heights)):
            if heights[i] != expect[i]:
                miss += 1

        return miss
