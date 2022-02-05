# 🚀 Welcome to your new awesome project!

This project has been created using **webpack-cli**, you can now run

```
npm run build
```

or

```
yarn build
```

to bundle your application


## Webpackプロジェクトの見方(基本)

|フォルダ名|詳細|
|----|-----|
|entry|最初に使用されるファイルをしている。デフォルトだとindex.tsが指定される。|
|output|出力先を指定する。デフォルトだとdistフォルダが該当する。|
|devServer|開発サーバー用の設定|
|plugin|プラグインの設定を行うところ。|
|resolve|Webpackで処理するファイルの種類を拡張子ベースで定義するところ|

## Webpack.config.js
   上記のフォルダ構成も含め、Webpackプロジェクトを細かく設定できる設定ファイル。
