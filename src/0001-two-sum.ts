// one-pass O(n) solution
function twoSum(nums: number[], target: number): number[] {
    const visited = new Map<number, number>()
    
    for (let i: number = 0; i < nums.length; ++i) {
        const num: number = nums[i]
        if (visited.has(num)) {
            return [visited.get(num), i]
        }
        
        visited.set(target-num, i)
    }
}