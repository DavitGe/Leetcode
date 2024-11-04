/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    let arr = []
    for (let x of nums) {
        if (arr[x]) arr[x]++
        else arr[x] = 1
    }
    // console.log(arr,arr[0])
    let al = arr.length
    let money = []
    for (let i = 0; i < al; i++) {
        if (!arr[i]) {
            money[i] = 0
        }
        else {
            money[i] = i * arr[i]
        }
    }
    // console.log(money)
    if (money[1] < money[0]) money[1] = money[0]
    for (let i = 2; i < al; i++) {
        if (money[i] + money[i - 2] > money[i - 1]) {
            money[i] += money[i - 2]
        }
        else {
            money[i] = money[i - 1]
        }
    }
    return money.pop()
};