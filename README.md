# このリポジトリについて

このリポジトリは自分が作成したGASのソースを管理するためのものです。

## gas_tweet_bot

Google App ScriptによるTweet投稿スクリプト

### 処理概要
- google spreadsheetで作成したツイート一覧からランダムに選択しツイートを投稿する

### 利用までの準備
1. IFTTTにアプレットを作成する（IF Webhook Then Twitterみたいな感じ）
2. google spreadsheet上にツイート一覧を作成する
3. スプレッドシートのスクリプトに～をコピペ
4. スクリプトプロパティに定数を登録する　※詳細は後述
5. 定期実行を行うようにマイトリガーを設定する。

#### スクリプトプロパティの登録内容

|プロパティ  |設定内容  |備考  |
|---------|---------|---------|
|WEBHOOKS_KEY|https://maker.ifttt.com/use/の後の文字列|IFTTTのサイトからWebhooks Settingsに表示されているURLから確認可能|
|SPREAD_SHEET_ID|https://docs.google.com/spreadsheets/d/の後の文字列|作成したgoogle spreadsheetのURLから確認可能|



