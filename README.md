# WAIE Speech Practice - reorder version

この版は、スライド画像とシナリオを1つのカードとして扱います。
そのため、スライドを上下に移動すると、英語台本と日本語メモも一緒に移動します。

## 使い方

1. GitHubに `index.html`、`slides/`、`.nojekyll` をアップロードします。
2. スライド番号を選びます。
3. 「このスライドを上へ」「このスライドを下へ」で順番を変えます。
4. 台本を直すと、自動保存されます。
5. AndroidではSlack内ブラウザではなくChromeで開いてください。

## 注意

- 並び替えや台本修正は、開いた端末のブラウザに保存されます。
- GitHub上のファイル自体を書き換える機能ではありません。
- 別端末にも同じ台本を移したい場合は、「台本データを書き出し」でJSONを保存し、「台本データを読み込み」を使ってください。


## 2026-05-24 fix
Slide 2 is now connected to the ART 5.0 narration. The storage key was changed so old browser-saved script data will not override the corrected default order.
