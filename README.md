<div align="center">
  <img src="https://raw.githubusercontent.com/mazecodes/damnerror/master/assets/throw-table.gif" alt="Throw table gif!">
  <h1>Damn Error</h1>
  <p><i>Express your feelings while throwing damn errors!</i></p>
</div><br>

This package is production ready and has 100% test coverage so don't hesitate to use it in an enterprise application. Yeah... that would be fun!

## Install

npm:

```bash
npm install damnerror
```

Yarn:

```bash
yarn add damnerror
```

GitHub:

```bash
git clone https://github.com/mazecodes/damnerror.git
```

## Usage

Wanna throw a table? I got you:

```javascript
const DamnError = require('damnerror');

try {
  throw new DamnError();
} catch (err) {
  console.log(err.message); // (╯°□°）╯︵ ┻━┻
}
```

Throwing tables isn't your thing? Fine, you can shout as well!

```javascript
const DamnError = require('damnerror');

try {
  throw new DamnError('Password is wrong');
} catch (err) {
  console.log(err.message); // ૮( ᵒ̌▱๋ᵒ̌ )ა PASSWORD IS WRONG!!!
}
```

## Run tests

```bash
npm run test
```

## Contributing

All contributions, issues and feature requests are welcome!<br>
Please feel free to check [issues page](https://github.com/mazecodes/damnerror/issues).

1. Fork the project
1. Create your feature branch (`git checkout -b feature/AwesomeFeature`)
1. Commit your changes (`git commit -m "Add Awesome Feature"`)
1. Push to the branch (`git push origin feature/AwesomeFeature`)
1. Open a Pull Request

## Author

Maze Peterson:

- Twitter: [mazecodes](https://twitter.com/mazecodes)
- GitHub: [mazecodes](https://github.com/mazecodes)
- npm: [mazecodes](https://npmjs.com/~mazecodes)

## Show your support

Give a ⭐ if you liked this project!

## License

[MIT](https://github.com/mazecodes/damnerror/blob/master/LICENSE) © Maze Peterson
