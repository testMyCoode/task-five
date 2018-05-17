function isBalanced (str, brackets) {
    let stringArr = str.split(''),
        bracketsArr = brackets.split(''),
        openedBrackets = [],
        closedBrackets = [],
        stack = [];

    bracketsArr.forEach((value, index) => {
            index % 2 === 0 ? openedBrackets.push(value) : closedBrackets.push(value);
        }
    );

    for (let i = 0, len = stringArr.length; i < len; i++ ) {
        for (let j = 0, len = openedBrackets.length; j < len; j++) {

            if (stringArr[i] === openedBrackets[j]) {
                stack.push(stringArr[i])
            }

            if (stringArr[i] === closedBrackets[j]){
                stack[stack.length-1] === openedBrackets[j] ? stack.pop() : stack.push(stringArr[i]);
            }

        }
    }

    return stack.length === 0;

}
//  TRUE
console.log(isBalanced('(aaaa aaa aaa)', '()'));
console.log(isBalanced('(aaa aa[aa ]aa[a a]aaa', '[]'));
console.log(isBalanced('(aaa aa([aa() ])aa[a a]aa()a)', '()[]'));

//  FALSE
console.log(isBalanced('(aaaa (())aaa aaa))', '()'));
console.log(isBalanced('[(aaaa aaa aaa])', '()[]'));
console.log(isBalanced( ')]aaaa aaa aaa[(', '()[]' ));