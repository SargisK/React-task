module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "import",
        "jsx-a11y"
    ],
    "root": true,
    "env": {
        "browser": true
    },
    rules: {
        "linebreak-style": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    },
};