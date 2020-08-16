/* botとしてツイートする */
function botTweet() {
  var SPREAD_SHEET_ID = PropertiesService.getScriptProperties().getProperty("SPREAD_SHEET_ID"); // Tweet管理スプレッドシートのID
  
  // 配列で取得
  var sheet = SpreadsheetApp.openById(SPREAD_SHEET_ID);
  var data  = sheet.getDataRange().getValues();

  // 乱数生成
  var maxIndex = data[0][1];
  var index = parseInt(Math.random() * maxIndex) + 1;
  
  // ツイートを変数に設定
  var tweetText = data[index][0];

  // ツイート
  tweet(tweetText);
}

/* ツイートする */
function tweet(text) {
  tweetByIfttt(text);
}

/* IFTTTからツイートする */
function tweetByIfttt(text) {
  var EVENT_NAME = PropertiesService.getScriptProperties().getProperty("EVENT_NAME"); // IFTTTイベント名
  var WEBHOOKS_KEY = PropertiesService.getScriptProperties().getProperty("WEBHOOKS_KEY"); // 自アカウントのwebhook key

  var url = "https://maker.ifttt.com/trigger/" + EVENT_NAME + "/with/key/" + WEBHOOKS_KEY
  var data = {"value1":text}; // tweet本文
  var headers = {
    "Content-Type": "application/json"
  };
  var options = {
    'method' : 'post',
    'headers' : headers,
    'payload' : JSON.stringify(data),
  };

  UrlFetchApp.fetch(url,options);
  
}
