const sumStrings = require("../../src/other/sumStrings");

const DATA_SET = [
    {in: ["123", "456"], out: "579"},
    {in: ["8797", "45"], out: "8842"},
    {in: ["800", "9567"], out: "10367"},
    {in: ["00103", "08567"], out: "8670"},
    {in: ["50095301248058391139327916261", "81055900096023504197206408605"], out: "131151201344081895336534324866"}
];

describe("Sum strings testing", () => {
    for(let i = 0; i < DATA_SET.length ; i++){
        it("Testing DATA_SET " + (i+1), () => {
            const res = sumStrings(DATA_SET[i].in[0], DATA_SET[i].in[1]);
            expect(res).toEqual(DATA_SET[i].out);
        });
    }
});
