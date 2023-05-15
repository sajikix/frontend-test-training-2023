# frontend-test-training-2023

サイボウズ開運研修 2023「フロントエンドテスト自動化」の演習リポジトリです。

### 前提

- Node.js v18 以上の環境があること
- git 環境があること (github からこのソースコードを clone してこれること)

### セットアップ

このリポジトリまで移動する

```
$ cd /path/to/this/repo/
```

依存パッケージをインストールする

```
$ npm ci
```

Storybook を起動する

```
$ npm run stroybook
```

http://localhost:6006 にアクセスする

### 課題の進め方

`src/tasks/`に `Task1.stories.tsx`のような課題ファイルが入っています。こちらを開きコメントに従ってテストコードを書き進めてください。

それぞれのページに対応するコードは `src/pages/`に同じ名前で入っています。

また Storybook の画面を見ながら実装すると見た目でわかるので進めやすいです。

所定の動作が確認できており、Storybook 下部の interactions パネルが PASS になっていれば OK です。

解答例は `src/answers/` に入っています。
