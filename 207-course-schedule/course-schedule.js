/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
        if (numCourses <= 1 || !prerequisites || prerequisites.length <= 1) {
        return true;
    }
    const matrix = Array.from({ length: numCourses }, () => new Array(numCourses).fill(0));
    const requirements = new Array(numCourses).fill(0);
    prerequisites.forEach(each => {
        const [course, pre] = each;
        if (matrix[pre][course] === 0) {
            requirements[course]++;
        }
        matrix[pre][course] = 1;
    });
    const stack = [];
    requirements.forEach((each, index) => {
        if (each === 0) {
            stack.push(index);
        }
    });
    let counter = 0;
    while (stack.length) {
        const course = stack.shift();
        counter++;
        for (let i = 0; i < numCourses; i++) {
            if (matrix[course][i] !== 0) {
                requirements[i]--;
                if (requirements[i] === 0) {
                    stack.push(i);
                }
            }
        }
    }
    return counter === numCourses;
};