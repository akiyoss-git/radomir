const VkBot = require('node-vk-bot-api');
const Session = require('node-vk-bot-api/lib/session');
const Stage = require('node-vk-bot-api/lib/stage');
const api = require('node-vk-bot-api/lib/api')
const Markup = require('node-vk-bot-api/lib/markup');
const XMLHttpRequest = require('xhr2');
const wtfscene = require('./wtfscene')

const bot = new VkBot("vk1.a.zghiAfyboZX0DSu3hX7eSWH36m2paeiEe4PrljpjI-WmlSA43TpaXR3V-yVBIZOp_NIDr6UIQsMZERppIFps5eDmuu3SJ_4Yu11V-GFj1DvlZjABwYGZysmJS9NTp_PfYsS3aQa2d0Z4H6_Y_FjuHqIV3iFycuhVvoR0VFLYY5Ywa-88rKHdYMj8i5QPZrSssksfRGOH8Q9JKH7ae4on0w");

bot.use(async (ctx, next) => {
    try {
      await next();
    } catch (e) {
      console.error(e);
    }
  });

bot.command(['Что случилось?'], async (ctx) => {
  await ctx.reply('Да шарился по этим вашим интернетам и вирусняк поймал, не знаю что делать. Говорит загадки разгадывай, а я ж не шарю в зумерских темах... Поможешь?', null, Markup
  .keyboard([
    [
      Markup.button('Конечно!'),
    ]
  ])
  .oneTime(true))
})

const session = new Session();

const stage = new Stage(wtfscene);

bot.use(session.middleware());
bot.use(stage.middleware());

bot.command('Конечно!', async (ctx) => {
  await ctx.scene.enter('wtf');
});

bot.command(['Эмм... Не за что?'], async (ctx) => {
  await ctx.reply('Пользователь R@D0MEER был в сети 5 минут назад.')
})

bot.command(['Конечно!'], async (ctx) => {
  requests = new XMLHttpRequest();
  requests.open("POST", "https://pelevin.gpt.dobro.ai/generate/", true);
  requests.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  requests.setRequestHeader("Access-Control-Allow-Origin","*");
  requests.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
  requests.onreadystatechange = function() { 
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        console.log(JSON.parse(requests.response).replies[0])
        congratText = congratText + JSON.parse(requests.response).replies[0]
        ctx.reply()
    }
  }
  requests.send(JSON.stringify({
    "length": 30,
    "prompt": congratText
  })); 
})

bot.on(async (ctx)=>{
  await ctx.reply('ЗдравстERROR ERROR ERRORнник! Приветствует тебя ERROR Радомир. Вновь несчастье случилось у меня EXCEPTION ERROR. После нашей встречи остался я в мире цифровом, да выбраться не моERROR. Помоги мне, пожалуйста?', null, Markup
  .keyboard([
    [
      Markup.button('Что случилось?'),
    ],
  ])
  .oneTime(true));
})



bot.startPolling((err) => {
    if (err) {
      console.error(err);
    }
  });