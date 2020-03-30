// LINE Message API アクセストークン
var ACCESS_TOKEN = "gfLMLf+kcs9YHk0uWJdpAFjtgTyb4IeSd8qtP2Zb6Iewj7IQENFYUlLAt4PNQVsoyLm6zhN5oMIMpm2m8UXAjS/ZPuAjEoUjnHvcJwV3s3uU/uzXcIBoIdqFq6vrAzpVdEvYYH3S8wY7baoeHC9G3gdB04t89/1O/w1cDnyilFU=";

function broadcast() {
  UrlFetchApp.fetch('https://api.line.me/v2/bot/message/broadcast', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + ACCESS_TOKEN,
    },
    payload: JSON.stringify({
      messages: [
        {
            type: 'text',
            text: '今日の筋トレ結果を入力してね！\n\n最初の行に名前、次の行に腕立て、次の行に腹筋、次の行に背筋、次の行にスクワットを入力してください。'
        },
      ]
    }),
  });
}