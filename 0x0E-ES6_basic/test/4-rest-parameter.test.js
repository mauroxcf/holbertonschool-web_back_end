import returnHowManyArguments from '../4-rest-parameter.js';


test('3-default-parameter', () => {
    expect(returnHowManyArguments("one")).toBe(1);
    expect(returnHowManyArguments("one", "two", 3, "4th")).toBe(4);
});