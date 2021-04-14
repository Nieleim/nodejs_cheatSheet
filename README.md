# NodeJS CheatSheet

## Stack & Package

* [NodeJS](https://nodejs.org/en/)
    * [Express](http://expressjs.com/)
    * [Swagger](https://www.npmjs.com/package/express-swagger-generator)
    * [Winston](https://www.npmjs.com/package/winston)

## VsCode Auto-Format
1. Go to File->Preferences->settings
2. Go to Workspace
3. Activate auto-format on save

OR

1. Add in .vscode this settings.json:
```JSON
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": [
        "javascript"
    ]
}
```

Don't forget to add **.vscode** folder in **.gitignore**