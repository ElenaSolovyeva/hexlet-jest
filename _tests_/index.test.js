import reverse from '../src/index.js';

test('reverse', () => {
  expect(reverse('hello')).toEqual('olle|h');
  expect(reverse('')).toEqual('');
});
