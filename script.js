Array.prototype.myFilter = function (callback, thisArg) {
    let resultArray = [];

    for (let i = 0; i < this.length; i++) {
        if (callback.call(thisArg, this[i], i, this)) {
            resultArray.push(this[i])
        }
    }

    return resultArray;
};

function moveZeros(array) {
    let resultArray = array.filter((value) => value !== 0),
        zeros = new Array(array.length - resultArray.length).fill(0);

    return resultArray.concat(zeros);

}

moveZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]); // [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

function maxZeroSequence(array) {
    let zeroSumAllSequences = [],
        zeroSumSequence = [],
        localArr = array.slice(),
        len = array.length;

    for (let i = 0; i < len; i++) {
        let sum = localArr[i];

        for (let j = i + 1; j < len; j++) {
            sum += localArr[j];
            if (sum === 0) {
                zeroSumSequence = localArr.slice(i, j + 1);
                zeroSumAllSequences.push(zeroSumSequence)
            }
        }
    }

    return zeroSumAllSequences.reduce((prev, cur) => prev.length > cur.length ? prev : cur);
}

console.log(maxZeroSequence([25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11])); //  RESULT [92, -115, 17, 2, 2, 2]

Array.prototype.sameStructureAs = function (array) {
    let result;
    for (let i = 0; i < this.length; i++) {
        if ((typeof this[i] === 'number' && typeof array[i] === 'number') ||
            (Array.isArray(this[i]) && Array.isArray(array[i]))) {
            result = true;
        }
        else {
            return false;
        }
    }
    return result;
};


//  TRUE
console.log([1, 1, 1].sameStructureAs([2, 2, 2]));
console.log([1, [1, 1]].sameStructureAs([2, [2, 2]]));
console.log([1, [1, 1], 1, [1, 1, 1]].sameStructureAs([2, [2, 2], 2, [2]]));

//  FALSE
console.log([1, [1, 1]].sameStructureAs([[2, 2], 2]));
console.log([1, [1], 1, [1]].sameStructureAs([2, [2], [2], [2]]));

//NOT DONE YET
function isBalanced (str, parentheses) {

}
//  TRUE
isBalanced('(aaaa aaa aaa)', '()');
isBalanced('(aaa aa[aa ]aa[a a]aaa', '[]');
isBalanced('(aaa aa([aa() ])aa[a a]aa()a)', '()[]');

//  FALSE
isBalanced('(aaaa (())aaa aaa))', '()');


