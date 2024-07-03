module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended"],
	"overrides": [],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": ["react", "@typescript-eslint"],
	"rules": {
		"indent": ["warn", "tab"],
		"quotes": ["warn", "double", {"allowTemplateLiterals": true}],
		"semi": ["error", "always"],
		"react/react-in-jsx-scope": "off",
		"react/no-unescaped-entities": "off",
		"prefer-const": "warn"
	}
};