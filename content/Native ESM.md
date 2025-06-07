---
title: Native ESM
---

Native ESMとは，ブラウザが直接理解し，実行できる[[ECMAScript Modules]]（ES Modules，ESM）のことである[^web-native_esm]．ES ModulesはJavaScriptの標準モジュールシステムである．これは`import`，`export`構文を用いて，コードを分割，再利用できるようにした仕組みである．

Native ESMは従来の開発プロセスを改善する．従来はES Module形式で開発されたコードをブラウザが読み込める形式へ変換（[[トランスパイル]]）し，一つのファイルに結合（[[バンドル]]）したものを用意していた．Native ESMを用いることで，この変換や結合の手順は不要となる．これにより，ブラウザは必要なモジュールを直接読み込み，実行できるため，開発効率の向上に加えて，実行時のパフォーマンスも向上する．

[^web-native_esm]: uhyo，“Native ESM時代とはなにか”（Zenn），URL: https://zenn.dev/uhyo/articles/what-is-native-esm-era
