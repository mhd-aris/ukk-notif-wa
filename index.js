const wa = require('@open-wa/wa-automate');

wa.create({
  sessionId: 'MhdAris',
  headless: true,
  qrTimeout: 0,
  authTimeout: 0,
  restartOnCrash: start,
  cacheEnabled: false,
  useChrome: true,
  killProcessOnBrowserClose: true,
  throwErrorOnTosBlock: false,
  chromiumArgs: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--aggressive-cache-discard',
      '--disable-cache',
      '--disable-application-cache',
      '--disable-offline-load-stale-cache',
      '--disk-cache-size=0'
  ]
}).then(client => start(client));

function start(client) {
  client.onMessage(async message => {
    if (message.body === 'Hi') {
      await client.sendText(message.from, '👋 Hello!');
      
    }
  });
}
