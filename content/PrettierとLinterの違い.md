---
title: PrettierとLinterの違い
---

[[Prettier]]と[[Linter]]はそれぞれ異なる機能と役割を持つツールである．Prettierは[[コードフォーマット]]を自動的におこなう．一方で，Linterはコードフォーマットに加え，[[コードの品質維持]]を目的とする[^web-prettier_linter]．

Prettierは設定された整形ルールに基づき，コードの見た目を統一する．Linterは定義されたルールに従い，コードの品質低下につながる記述を検出する．具体的には，参照されていない変数の削除や非推奨の関数の使用などが挙げられる．検出された問題は，プログラマへの指摘や自動修正によって対応される．

PrettierとLinterはそれぞれの専門分野を活かすため，併用が推奨されている．役割を明確に分離して利用することで，コードの可読性と品質を両立できる．

[^web-prettier_linter]: Prettier, “Prettier vs. Linters,” URL: https://prettier.io/docs/comparison
