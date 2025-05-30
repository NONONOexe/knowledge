---
title: LINE to Obsidian連携ツール
---

「LINE to Obsidian連携ツール」は[[LINE]]から[[Obsidian]]の[[Vault]]にメモを転送するためのツールである[^web-line_obsidian]．このツールを使うことで，スマートフォンから手軽にメモを作成し，Obsidianで整理，管理することができる．

このツールはLINEから送信されたメモを[[Markdown]]ファイルとして[[GitHub]]リポジトリに保存する．それから，ObsidianのGit連携機能により，この内容を確認することでLINEからの転送を実現している．LINEとの連携には[[Messaging API]]，GitHubとの連携には[[Apps Script]]を利用している．ツールの利用にあたっては，Google Apps Script，GitHubリポジトリの連携設定が必要である．

[^web-line_obsidian]: 亀ちゃん，“【開発秘話】Obsidian×LINE連携で爆速メモ管理！スマホからの入力を劇的に簡単にする方法，” URL: https://note.com/kamechan_usagi/n/nfb1a2a98f092
