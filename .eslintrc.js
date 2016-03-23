module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react"
  ],
  "rules": {
    "semi": ["error", "never"],
		"react/jsx-no-bind": ["error", {
			"allowArrowFunctions": true
		}],
    "react/jsx-indent-props": ["error", 2]
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  }
};
