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

`src/tasks/`に `Tasks.stories.tsx`という課題ファイルが入っています。ファイル内には問題ごとに `Task1` のような StoryObject (storybook の一単位みたいなもの)が書いてあります。この中の Play 関数にテストを書いていきます。基本的には移動ごとにコメントを書いておいたのでそこに従って書いていくと良いでしょう。

テストする対象のページのコードは `src/pages/`に入っています。

またコードを保存すると Storybook がリロードされ、テストを書いた部分までの操作を行った画面を表示してくれます。この Storybook の画面を見ながら実装すると進めやすいです。

所定の動作が確認できており、Storybook 下部の interactions パネルが PASS になっていれば OK です。

解答例は `src/answers/` に入っています。
