//Leetcode Question No: 232
var MyQueue = function() {
    this.stack = [];
};

MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

MyQueue.prototype.pop = function() {
    if(this.stack.length === 0) {
        return null;
    }
    let popNumber = this.stack[0];
    this.stack.shift();
    return popNumber;
};

MyQueue.prototype.peek = function() {
    if(this.stack.length === 0) {
        return null;
    }
    return this.stack[0];
};

MyQueue.prototype.empty = function() {
    return this.stack.length === 0;
};