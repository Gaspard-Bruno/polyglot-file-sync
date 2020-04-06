# Polyglot File Sync

A script to sync translation files with the [Polyglot](https://polyglot.gaspardbruno.com) API project.

## Getting started

### Installation
To install this package type
`yarn add -D polyglot-file-sync` in your terminal

### Usage
After installing the package you need to have a `config` file which should be passed as a parameter when you call `polyglot-file-sync`.
#### Configuration Example
```js
// ./polyglot.config.js
export default {
  username: 'user@gmail.com',
  password: "123123123",
  projectId: 1,
  defaultLanguage: 'en',
  pathToDefault: 'utils/phrases.js',
  targetBranch: 'master'
}
```
After setting your configuration file just type `polyglot-file-sync --config <path-to-config>`.

### Hooks
For a smoother experience, `polyglot-file-sync` can be used with Git Hooks. To do so, simply follow these steps:
- Install [husky](https://github.com/typicode/husky)
  - `yarn add husky`
- In your `package.json` add the following lines:
  ```json
  {
    ...,
    "husky": {
      "hooks": {
        "pre-push": "polyglot-file-sync --config polyglot_config.js"
      }
    },
    ...
  }
  ```
- `polyglot-file-sync` will automatically sync your translation file if you're on the target brach defined in your configuration
### Development
The following flags are available for development
- **--dev**
  - Enabling this flag will set the relative path at the root of the project folder instead of inside the `node_modules` folder.
- **--dev-server**
  - Will trigger calls to `localhost:3000` instead of the Polyglot API

There's also a script that will run with an example configuration and phrases that can be used via `yarn dev`.
## Configuration
An example configuration can be found in the `examples` directory. Here's the currently supported configuration

- `username` (*required*)
  - Your Polyglot username, required to authenticate.
- `password` (*required*)
  - Your Polyglot password, required to authenticate.
- `pathToDefault` (*required*)
  - Path to the translation file **from the project root**
- `projectId` (*required*)
  - Your polyglot project ID
- `defaultLanguage` (*defaults to first language in Polyglot API*)
  - The language your default translations should be applied to
- `targetBranch` (*defaults to `master`*)
  - Target branch, for usage with hooks. Ensures only changes made to this branch are synced with Polyglot API
## License

MIT
