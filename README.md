# TypeScriptApp
TypeScriptを学習するためのリポジトリです。

### TSC
    トランスコンパイラのこと。  
    TypeScriptのファイル「*.ts」を「*.js」に変換する。
    
### Webpack
    JavaScriptモジュールハンドラのこと。  
    多数のスクリプトファイルをまとめて圧縮すること。

### TypeScriptのモジュールをインストールするコマンド
   `npm i typescript @type/node` 

### Webpackのモジュールをインストールするコマンド
   `npm install webpack ts-loader @webpack-cli/generators`

### npmとTypeScriptの設定ファイルを作成するコマンド
   `npm -y init`
   `tsc --init`

### Webpack-CLIで初期化するコマンド
   `npx webpack-cli init`

### Webpack関連のコマンド
   <a href="./README2.md">こちらのmdファイルを参照</a>

### クロージャ
    定義された環境を保ち、その中で動く関数のこと

### 高階関数
    関数そのものを引数に指定したり、戻り値として使用する関数のこと

### ※注意点※
    スクリプトファイルは、「src」ディレクトリ配下に入れること

### エラー対処法
    
   1. Accessors are only available when targeting ECMAScript 5 and higher.が出た場合
      tscコマンドを実行する時に「-t ES5」をつけること。 

### パラメータプロパティ