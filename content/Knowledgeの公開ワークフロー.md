---
title: Knowledgeの公開ワークフロー
---

[[Knowledge]]は[[Markdown]]ファイルからWebサイトを構築できる[[Quartz]]というツールを利用して，Webサイトへ公開されている．このKnowledgeの公開はワークフロー自動化サービスである[[GitHub Actions]]により，ローカル環境にある[[Obsidian]]の[[Vault]]から自動的におこなわれる．具体的な手順は以下の通りである．

![[knowledge-workflow-diagram.png]]

1. Obsidianの[[Git]]連携のためのプラグインにより，ローカル環境上のノート全体が[[GitHub]]上のプライベートリポジトリに同期される．
2. プライベートリポジトリ内の特定のディレクトリ内にある，整理されたノートファイル群がKnowledgeのデータディレクトリへ同期される．
3. Quartzの機能により，同期されたノートファイル群がWebページに変換される．
4. 変換されたWebページが[[GitHub Pages]]に公開される．
