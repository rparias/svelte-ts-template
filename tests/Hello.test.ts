import hello from '../src/Hello';

describe('Hello test suite', () => {
	test('returns hello world string', () => {
		expect(hello()).toBe('Hello world');
	});
});
