# forage-pl

Scripts for importing and seeding Protocol Labs packages and dependencies in Forage

## Installation

```shell
git clone https://github.com/foragepm/forage-pl.git
cd forage-pl
npm ci
```

## Usage

Import all IPFS and Filecoin packages all dependencies of protocol labs repositories into Forage

```shell
npm start
```

Then you can install and run [Forage](https://github.com/foragepm/forage) in seed mode to share your newly imported packages with everyone else:

```
npm install -g foragepm
forage seed
```

## Development

Forest needs your help!  There are a few things you can do right now to help out:

Read the [Development documentation](https://github.com/forestpm/forest/docs/development.md), [Code of Conduct](https://github.com/forestpm/forest/docs/code-of-conduct.md) and [Contributing Guidelines](https://github.com/forestpm/forest/docs/contributing.md).

- **Check out existing issues** The [issue list](https://github.com/forestpm/forage-pl/issues) has many that are marked as ['help wanted'](https://github.com/forestpm/forage-pl/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22help+wanted%22) which make great starting points for development, many of which can be tackled with no prior IPFS knowledge
- **Perform code reviews** More eyes will help
  a. speed the project along
  b. ensure quality, and
  c. reduce possible future bugs.
- **Add tests**. There can never be enough tests.

## Copyright

[MIT License](LICENSE) © 2021 [Andrew Nesbitt](https://github.com/andrew).
