const myList = ["Apple", "Banana", "Banana", "Strawberry", "Lemon", "Orange"];

/**
 * Chunk function: Splits the array.
 */
const myNewArray = _.chunk(myList, 3);
console.log(myNewArray);
/*
-- Output: --  
[Array(3), Array(3)]
0: (3) ['Apple', 'Banana', 'Banana']
1: (3) ['Strawberry', 'Lemon', 'Orange']
*/

/**
 * Create new list from existing list except given values
 */
const myDiffList = _.difference(myList, ["Apple", "Banana"]);
console.log(myDiffList);
/**
 * ['Strawberry', 'Lemon', 'Orange']
 */

/**
 * Merge array elements into one
 */
const myMergedList = _.join(myList, "-");
console.log(myMergedList);
/**
 * Output: Apple-Banana-Banana-Strawberry-Lemon-Orange
 */

/**
 * Removes duplicates on list
 */
const removedDuplicateList = _.uniq(myList);
console.log(removedDuplicateList);
/**
 * ['Apple', 'Banana', 'Strawberry', 'Lemon', 'Orange']
 * Removed duplicated 'Banana' string.
 */

/**
 * Concatenates values to an existing Array
 */
const concatenatesList = _.concat(myList, "Peach", "Melon");
console.log(concatenatesList);
/**
 * ['Apple', 'Banana', 'Banana', 'Strawberry', 'Lemon', 'Orange', 'Peach', 'Melon']
 */
