import main from '../index';

test('Index - Tests for some output to be defined', () => {
  expect(main()).toBe('Connected!');
});
