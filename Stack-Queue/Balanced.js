//Leetcode Question No: 20
const isValid = function(s) {
    let stack = [];
    for(let ch of s) {
        if(ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        } else {
            if(stack.length === 0 ||
                (ch === ')' && stack[stack.length - 1] !== '(') ||
                (ch === '}' && stack[stack.length - 1] !== '{') ||
                (ch === ']' && stack[stack.length - 1] !== '[')
            ) {
                return false;
            }
            stack.pop();
        }
    }
    return !stack.length;
}

console.log(isValid("()"));