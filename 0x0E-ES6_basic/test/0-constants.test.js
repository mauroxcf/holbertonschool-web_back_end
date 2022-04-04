import { taskFirst, taskNext } from '../0-constants'

test('0-constants', () => {
    expect(taskFirst() + ' ' + taskNext()).toBe('I prefer const when I can. But sometimes let is okay');
});