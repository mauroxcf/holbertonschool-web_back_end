import taskBlock from '../1-block-scoped.js';


test('1-block-scoped', () => {
    expect(taskBlock(true)).toStrictEqual([ false, true ]);
    expect(taskBlock(false)).toStrictEqual([ false, true ]);
});