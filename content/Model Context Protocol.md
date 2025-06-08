---
title: Model Context Protocol
aliases: [MCP]
---

Model Context Protocol（MCP）は[[AIアシスタント]]と外部システムやデータソースを双方向で安全かつ標準化して接続するためのオープンプロトコルである[^web-mcp]．MCPを用いることで，データベースやメッセンジャーなどのシステムを自然言語により操作することができる．

MCPは2024年11月に[[Anthropic]]により発表されたものである．MCPを利用するには，[[MCPサーバー]]と呼ばれるサーバーへ接続する必要がある．AIアシスタントはこのMCPサーバーを介して，各種システムを操作する．MCPサーバーは[[Google Drive]]，[[Slack]]，[[PostgreSQL]]など，システムごとに提供されている[^web-mcp_server]．

[^web-mcp]: Anthropic, “Introducting the Model Context Protocol,” URL: https://www.anthropic.com/news/model-context-protocol
[^web-mcp_server]: modelcontextprotocol/servers (GitHub), URL: https://github.com/modelcontextprotocol/servers
