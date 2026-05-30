WAIE Speech Practice v2 使い方

1. ZIPを解凍して index.html を開きます。
   保存を安定させるには、GitHub Pagesで開くか、PC版Chrome/Edgeで使ってください。

2. 自動保存について
   English narration、日本語メモ、スライド順を変更すると、ブラウザ内に自動保存されます。
   さらに安全にしたい場合は「保存接続」を押し、waie_scenario_data.json などの保存先を指定してください。
   以後、編集内容はブラウザ内とJSONファイルの両方に保存されます。

3. バックアップ
   「書出」でJSONを保存できます。
   別のPCやブラウザで使う場合は「読込」でそのJSONを読み込んでください。

4. 日本語音声入力
   「日本語音声入力」を押して話すと、日本語メモ欄に文字起こしされます。
   PC版Chrome/Edgeでの利用を想定しています。

5. 英訳
   「英訳→English欄」を押すと、日本語メモを英語に翻訳します。
   翻訳API URLが未設定の場合、試用の外部翻訳APIを使うか確認が出ます。
   個人情報や生徒情報は外部翻訳APIに送らないでください。

6. 翻訳API URLを自分で用意する場合
   Google Apps ScriptやCloudflare Workersなどで、POSTされたJSON { text, source, target } を受け取り、
   JSON { translation: "translated text" } を返すエンドポイントを設定してください。
   URLをアプリ内の「翻訳API URL」に貼り付けて「設定保存」を押すと使えます。

7. 旧版をGitHub Pagesで使っていた場合
   ブラウザに古いService Workerが残ることがあります。
   その場合は、Ctrl+F5で再読み込みするか、ブラウザのサイトデータを削除してから開き直してください。
