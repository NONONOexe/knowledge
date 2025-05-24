# OSRMのサーバー構築方法

## 概要

[[OSRM（サービス）|OSRM]]のサーバーは[[osrm-backend]]と呼ばれ，[[GitHub]]で提供されているほか，[[Docker Hub]]からイメージとしても提供されている[^web-osrm_backend]．そのため，ユーザーはこのイメージを用いることで，OSRMのサーバーを少ない手順で，任意の環境に構築できる．

OSRMのサーバーは対象地域を表現した専用のルーティングデータを入力として動作する．osrm-backendには，[[OSM]]の地図データをこのルーティングデータへ変換するためのプログラムが含まれている．ここでは，中部地方のデータを変換する例を用いて説明する．

## データの用意

入力となるPBF形式の地図データは[[GeoFabrik（サービス）]]から取得できる．中部地方の場合は「chubu-latest.osm.pbf」という名前のファイルである．このファイルを任意のディレクトリに配置する．

次に，地図データを配置したディレクトリで，`docker run`コマンドから，osrm-backendに含まれる3つのプログラムを順に実行する．実行するコマンドを次に示す．

```shell
docker run -t -v "${PWD}:/data" osrm/osrm-backend osrm-extract -p /opt/foot.lua /data/chubu-latest.osm.pbf
docker run -t -v "${PWD}:/data" osrm/osrm-backend osrm-partition /data/chubu-latest.osrm
docker run -t -v "${PWD}:/data" osrm/osrm-backend osrm-customize /data/chubu-latest.osrm
```

ここで，実行されるプログラムはそれぞれ次の機能を持つものである．
- `osrm-extract`: 地図データからネットワークデータを抽出する
- `osrm-partition`: ネットワークデータを複数のセルへ分割する
- `osrm-customize`: すべてのセルの経路へ重みづけをおこなう
また，osrm-extractにおいて，`p`オプションで指定しているluaファイルは移動手段を表す．この例では，`foot`（徒歩）を指定しているが，ほかに`car`（車），`bike`（自転車）がある．

## サービスの起動

データの変換が完了したら，次のコマンドでサービスを起動する．

```shell
docker run -t -i -p 5000:5000 -v "${PWD}:/data" osrm/osrm-backend osrm-routed --algorithm=MLD /data/chubu-latest.osrm
```

このコマンドで実行されるOSRMのサービスは5000番のポートでリクエストを受け付ける．OSRMはデフォルトで5000番のポートでリクエストを受け付けており，ここでは，ホストの同じポートと対応付けている．

## 動作の確認

OSRMの動作を確認するには，クエリが正しく実行されるかを確認すればよい．
OSRMでは，2点間の経路を求めるクエリは次のように記述する．ここで，lat1，lon1，lat2，lon2はそれぞれ各地点の経緯度を表す．

```
http://127.0.0.1:5000/route/v1/driving/[lat1],[lon1];[lat2],[lon2]?steps=true
```

これにしたがい，たとえば，愛知工業大学から名古屋城までの経路は次のクエリで確認できる．

```
http://127.0.0.1:5000/route/v1/driving/137.11299898,35.18357877;136.89962392,35.18493421?steps=true
```

このクエリをブラウザなどから，実行すると，JSON形式のデータが返される．このデータのはじめに`"Ok"`というコードが含まれていれば，経路が正しく求められている．

[^web-osrm_backend]: Project-OSRM/osrm-backend: Open Source Routing Machine - C++ backend (GitHub), URL: https://github.com/Project-OSRM/osrm-backend
