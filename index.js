/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-empty */
/* eslint-disable no-lonely-if */

function test(string) {
    const set = new Set();
    const isFull = () => { return set.size >= 2 }
    let backwards = false;
    let array = [];
    let currentCount = 0;

    for (let i = 0; i < string.length; backwards ? i-- : i++) {
        const char = string[i];
        if (isFull()) {
            if (set.has(char)) {
                currentCount += 1;
            } else {
                if (backwards) {
                    set.clear();
                    array.push(currentCount);
                    currentCount = 0;
                    backwards = false;
                } else {
                    set.clear();
                    set.add(char);
                    array.push(currentCount);
                    currentCount = 1;
                    backwards = true;
                }
            }
        } else {
            if (set.has(char)) {
                currentCount += 1;
            } else {
                set.add(char);
                currentCount += 1;
            }
        }

        if ((i + 1) === string.length) { array.push(currentCount) }

    }

    return Math.max(...array);
}

console.log(test('abcdef')); // 2
console.log(test('aaaaa')); // 5
console.log(test('abaccab')); // 4