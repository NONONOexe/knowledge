---
aliases:
  - OSRM
  - Open Source Routing Machine
---

# OSRM（サービス）

OSRM（Open Source Routing Machine）は[[OpenStreetMap]]（OSM）の道路データを用いた経路検索サービスである[^web-osrm]．OSRMを用いると，指定した始点と終点との間の経路について，そのジオメトリや移動時間などの情報が得られる．一から経路を計算により求める場合と比べて，道路ネットワークの構築や探索アルゴリズムを用意することなく経路情報を得られる．また，C++を用いて実装されており，高速に経路の計算がなされる点も利点として挙げられる．

OSRMの利用方法には，APIを提供するデモサーバーを用いる方法と，サーバーを構築する方法がある．デモサーバーは準備が不要である一方，利用ポリシーによる制限がある．利用ポリシーでは，1秒間の最大リクエスト数は1回とし，サーバーへ高い負荷をかける呼び出しを禁じている[^web-osrm_policy]．サーバーを構築する場合は，自由に利用できるが，OSMのデータをダウンロードする，OSMのデータをネットワークモデルへ変換するなど，事前の準備が必要となる．

[^web-osrm]: Project OSRM, URL: https://project-osrm.org/
[^web-osrm_policy]: OSRM routing server using OpenStreetMap data, URL: https://routing.openstreetmap.de/about.html
