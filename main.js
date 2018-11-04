class Stack {
    constructor() {
        this.data = [];
    }
    push(data) {
        this.data.push(data);
        return 1;
    }
    pop() {
        if(this.data.length > 0) {
            return this.data.pop();
        } else {
            return 0;
        }
    }
    peek() {
        return this.data[this.data.length - 1];
    }
    size() {
        return this.data.length;
    }
    empty() {
        this.data = [];
        return 1;
    }
}

function reversePolish(str) {
    let stack = new Stack();
    let tmp = str.split(' ');
    let num1;
    let num2;
    
    for(let i in tmp) {
        if(Number(tmp[i])/Number(tmp[i])) {
            stack.push(Number(tmp[i]));
        } else {
            if(tmp[i] == "+") {
                num1 = stack.pop();
                num2 = stack.pop();
                stack.push(num1 + num2);
            } else if(tmp[i] == "-") {
                num1 = stack.pop();
                num2 = stack.pop();
                stack.push(num1 - num2);
            } else if(tmp[i] == "*") {
                num1 = stack.pop();
                num2 = stack.pop();
                stack.push(num1 * num2);
            } else if(tmp[i] == "/") {
                num1 = stack.pop();
                num2 = stack.pop();
                stack.push(num1 / num2);
            }
        }
    }

    return stack.peek();
}

function request() {
    alert(reversePolish(prompt("Enter reverse polish")));
}