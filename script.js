// Array.prototype.myFilter = function (callback, thisArg) {
//     let resultArray = [];
//
//     for (let i = 0; i < this.length; i++) {
//         if (callback.call(thisArg, this[i], i, this)) {
//             resultArray.push(this[i])
//         }
//     }
//
//     return resultArray;
// };
//
// function moveZeros(array) {
//     let withoutZeros = array.filter((value) => value !== 0),
//         zeros = new Array(array.length - withoutZeros.length).fill(0);
//
//     return withoutZeros.concat(zeros);
//
// }
//
// moveZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]); // [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]
//
// function maxZeroSequence(array) {
//     let zeroAllSequences = [],
//         zeroSequence = [],
//         localArr = array.slice(),
//         len = array.length;
//
//     for (let i = 0; i < len; i++) {
//         let sum = localArr[i];
//
//         for (let j = i + 1; j < len; j++) {
//             sum += localArr[j];
//             if (sum === 0) {
//                 zeroSequence = localArr.slice(i, j + 1);
//                 zeroAllSequences.push(zeroSequence)
//             }
//         }
//     }
//
//     return zeroAllSequences.reduce((prev, cur) => prev.length > cur.length ? prev : cur);
// }
//
// console.log(maxZeroSequence([25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11])); //  RESULT [92, -115, 17, 2, 2, 2]
//
// Array.prototype.sameStructureAs = function (array) {
//     let result;
//     for (let i = 0; i < this.length; i++) {
//         if ((typeof this[i] === 'number' && typeof array[i] === 'number') ||
//             (Array.isArray(this[i]) && Array.isArray(array[i]))) {
//             result = true;
//         }
//         else {
//             return false;
//         }
//     }
//     return result;
// };
//
//
// //  TRUE
// console.log([1, 1, 1].sameStructureAs([2, 2, 2]));
// console.log([1, [1, 1]].sameStructureAs([2, [2, 2]]));
// console.log([1, [1, 1], 1, [1, 1, 1]].sameStructureAs([2, [2, 2], 2, [2]]));
//
// //  FALSE
// console.log([1, [1, 1]].sameStructureAs([[2, 2], 2]));
// console.log([1, [1], 1, [1]].sameStructureAs([2, [2], [2], [2]]));


// function isBalanced (str, parentheses) {
//     let stack = [];
//     parentheses = parentheses.split('');
//     str = str.split('');
//     //     .filter(value => value === parentheses[0] ||
//     //                                     value === parentheses[1] ||
//     //                                     value === parentheses[2] ||
//     //                                     value === parentheses[3]);
//     // if (str.length % 2 !== 0) {
//     //     return false;
//     // }
//
//     for (let i = 0; i < str.length; i++) {
//
//         if (str[i] === parentheses[0]||
//             str[i] === parentheses[2]) {
//             stack.push(str[i])
//         }
//
//         if (str[i] === parentheses[1]) {
//             if (stack[stack.length-1] === parentheses[0]) {
//                 stack.pop();
//             }
//             // if (stack.length === 0) {stack.push(str[i])}
//         }
//
//         if (str[i] === parentheses[3]) {
//             if (stack[stack.length-1] === parentheses[2]) {
//                 stack.pop();
//             }
//             else
//                 {stack.push(1)}
//
//         }
//
//     }
//     console.log(stack);
//     return stack.length === 0;
// }

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


