# ESLint Sharable Config for [INTERFIRM](https://github.com/interfirm)

INTERFIRMのプロジェクトで使用する[ESLintの共有設定ファイル][eslint-sharable-config]です。ベースとして、[Airbnbのsharable config][airbnb-packages]を使用しています。

[eslint-sharable-config]: http://eslint.org/docs/developer-guide/shareable-configs
[airbnb-packages]: https://github.com/airbnb/javascript/tree/master/packages

## Usage

このリポジトリはnpmに公開していないので、GitHubのリポジトリからインストールする必要があります。以下のように簡単にできます。
また、使用する際にはESLint本体を別途インストールする必要があります。

```sh
$ npm install --save-dev eslint interfirm/eslint-config-interfirm
# OR
$ yarn add --dev eslint interfirm/eslint-config-interfirm
```

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
- [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)

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
- [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
