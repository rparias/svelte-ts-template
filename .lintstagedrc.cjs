module.exports = {
	'*.js': ['prettier --write', 'eslint --fix'],
	'*.cjs': ['prettier --write', 'eslint --fix'],
	'*.ts': ['prettier --write', 'eslint --fix'],
	'*.svelte': ['prettier --write', 'eslint --fix', 'stylelint --fix']
};
