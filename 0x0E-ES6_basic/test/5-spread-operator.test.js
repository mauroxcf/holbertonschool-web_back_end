import concatArrays from '../5-spread-operator.js';


test('3-default-parameter', () => {
  expect(concatArrays(['a', 'b'], ['c', 'd'], 'Hello')).toStrictEqual([
    'a', 'b', 'c',
    'd', 'H', 'e',
    'l', 'l', 'o'
  ]
  );
});
