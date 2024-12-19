class Solution(object):
    def duplicateZeros(self, arr):
        i = 0
        length = len(arr)

        while i < length:
            if arr[i] == 0:
                i += 1
                arr.insert(i, 0)
                arr.pop()
            i += 1

        