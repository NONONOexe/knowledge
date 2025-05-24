---
title: shinylive
---

shinyliveは[[Shinyアプリケーション]]をブラウザのみで動くようにするツールである[^web-shinylive]．[[Shiny]]は本来，[[Python]]や[[R]]の環境を必要とするが，これを[[WebAssembly]]にコンパイルすることで，ブラウザ単体での実行を可能とする．

Rでは，同名のパッケージが持つ`shinylive::export()`という関数を実行することにより，通常のShinyアプリケーションをshinyliveのもとで動作する静的なWebページのためのファイル群に変換できる[^web-r_shinylive]．これを利用することで，Shinyアプリケーションを[[GitHub Pages]]などにより公開することもできる．

[^web-shinylive]: Posit, posit-dev/shinylive (GitHub), URL: https://github.com/posit-dev/shinylive
[^web-r_shinylive]: Posit, posit-dev/r-shinylive (GitHub), URL: https://github.com/posit-dev/r-shinylive
