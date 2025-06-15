---
title: Skyrim Control Mapper
---

Skyrim Control Mapperは[[Skyrim]]のキーマッピングをGUIで編集できるウェブアプリケーションである．このアプリケーションはゲームファイルである`controlmap.txt`をGUIで編集することで，その記述形式の分かりづらさやバージョン間の形式の差異といったキーマッピングの課題を解決するものである．

Skyrimでは，ゲーム内のオプションでキーコンフィグを変更できる．しかし，コントローラーのボタンの組み合わせに対応させるなど，詳細な設定はできない．キーマッピングは`controlmap.txt`というゲームファイルにテキスト形式で保存されている．`controlmap.txt`は編集を誤ると，ゲームが起動しなくなるリスクを持つ．

このアプリケーションはもともと[[Hawkbat]]氏が開発したものである[^web-scm_hawk]．その後，[[NONONOexe|筆者]]がこれを改修した．モダンなアプリケーションを目指し，[[PWA]]や[[MUI]]へ対応がおこなわれている[^web-scm_nonono]．

[^web-scm_hawk]: Hawkbat, Skyrim Control Mapper (GitHub), URL: https://hawk.bar/SkyrimControlMapper/
[^web-scm_nonono]: Keisuke Ando, NONONOexe/skyrim-control-mapper (GitHub), URL: https://github.com/NONONOexe/skyrim-control-mapper
