class Solution(object):
    def replaceElements(self, arr):
        currentGreatestI = 0
        length = len(arr)
        for x in range(0, length):
            if x >= len(arr) - 1:
                arr[x] = -1
                break
            if x >= currentGreatestI:
                tempGreatest = x + 1
                for i in range(x + 1, length):
                    if(arr[i] >= arr[tempGreatest]):
                        tempGreatest = i
                currentGreatestI = tempGreatest
            arr[x] = arr[currentGreatestI]
        
        return arr
            

        