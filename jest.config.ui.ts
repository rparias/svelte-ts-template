import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	roots: ['<rootDir>/src'],
	transform: {
		'^.+\\.svelte$': [
			'svelte-jester',
			{
				preprocess: true
			}
		],
		'^.+\\.ts$': 'ts-jest'
	},
	testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
	moduleFileExtensions: ['ts', 'js', 'svelte'],
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	testEnvironment: 'jsdom'
};

export default config;
