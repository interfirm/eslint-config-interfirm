[![NPM version](https://img.shields.io/npm/v/eslint-config-interfirm.svg)](https://www.npmjs.com/package/eslint-config-interfirm)
[![CircleCI](https://circleci.com/gh/interfirm/eslint-config-interfirm.svg?style=svg)](https://circleci.com/gh/interfirm/eslint-config-interfirm)
[![dependencies Status](https://david-dm.org/interfirm/eslint-config-interfirm/status.svg)](https://david-dm.org/interfirm/eslint-config-interfirm)

# ESLint Sharable Config for [INTERFIRM](https://github.com/interfirm)

INTERFIRMのプロジェクトで使用する[ESLintの共有設定ファイル][eslint-sharable-config]です。

[eslint-sharable-config]: http://eslint.org/docs/developer-guide/shareable-configs

## Installation

```sh
$ npm install --save-dev eslint eslint-config-interfirm
# OR
$ yarn add --dev eslint eslint-config-interfirm
```

## Usage

### Base + React rules (default)

Reactを含むコードベース用の設定ファイルです。
プロジェクトの`.eslintrc`ファイルに以下のように記述してください。

```json
{
  "root": true,
  "extends": ["interfirm"]
}
```

#### Used packages

- [eslint](https://github.com/eslint/eslint)
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
- [eslint-plugin-eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)

### Base rules

Reactを含まないコードベース用の設定ファイルです。
プロジェクトの`.eslintrc`ファイルに以下のように記述してください。

```json
{
  "root": true,
  "extends": ["interfirm/base"]
}
```

- [Example](https://github.com/interfirm/eslint-config-interfirm/tree/master/examples/base)

#### Used packages

- [eslint](https://github.com/eslint/eslint)
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)

## Development & Release

普段のコミットメッセージは[Conventional Commit](https://conventionalcommits.org)に従ってください。

[standard-version](https://www.npmjs.com/package/standard-version)を使っているので、リリースは以下のコマンドを実行するだけです（npmへの公開は、CIで自動的に行われます）。

1. `git checkout master`
1. `git pull`
1. `yarn release:dry-run`
1. `yarn release`
1. `git push --follow-tags`
