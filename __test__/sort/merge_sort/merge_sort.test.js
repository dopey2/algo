const merge_sort = require("../../../src/sort/merge_sort");

const DATA_SET = [
  [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  [3, 9, 5, 7, 6, 8, 4, 10, 2, 1],
  [4, 3, 2, 1, 10, 9, 8, 7, 6, 5],
  [7, 9, 6, 10, 4, 8, 3, 5, 2, 1],
];

describe("Merge sort test", () => {
    for(let i = 0; i < DATA_SET.length ; i++){
        it("Testing DATA_SET " + (i+1), () => {
            const res = merge_sort(DATA_SET[i]);
            expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        });
    }
});
