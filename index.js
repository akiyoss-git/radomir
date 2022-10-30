const VkBot = require('node-vk-bot-api');
const api = require('node-vk-bot-api/lib/api')

const bot = new VkBot("5611f9fe5cca5b61630406f7054ca28cb6cbcb7db657847a367f9f9dc0e8b6d9c0fe110041314c2ddb0d0");

const isMember = async (id) => {
  return await api('groups.isMember', {group_id: 7632561, user_id: id, access_token: "5611f9fe5cca5b61630406f7054ca28cb6cbcb7db657847a367f9f9dc0e8b6d9c0fe110041314c2ddb0d0"})
}

bot.use(async (ctx, next) => {
    try {
      await next();
    } catch (e) {
      console.error(e);
    }
  });

bot.command(['бесконечность'], async (ctx)=>{
    let res = await isMember(ctx.message.from_id)
    if (res.response == 1){
      await ctx.reply('', "video-187687824_456239021")
    }
    else {
      await ctx.reply('Для продолжения работы требуется подписаться на группу Профбюро ИРИТ')
    }
    
})

bot.command(['заглавие'], async (ctx)=>{
  let res = await isMember(ctx.message.from_id)
  if (res.response == 1){
    await ctx.reply('U+0412 &#1055 U+0418 &#95 U+0432 &#95 U+041D &#1053 U+005F &#49 U+0039 &#49 U+0036')
  }
  else {
    await ctx.reply('Для продолжения работы требуется подписаться на группу Профбюро ИРИТ')
  }
  
})

bot.command(['продуктивность'], async (ctx)=>{
  let res = await isMember(ctx.message.from_id)
  if (res.response == 1){
    await ctx.reply('Как связаны студенты НГТУ, госпиталь и благородные девицы?')
  }
  else {
    await ctx.reply('Для продолжения работы требуется подписаться на группу Профбюро ИРИТ')
  }
  
})

bot.command(['почему'], async (ctx)=>{
  let res = await isMember(ctx.message.from_id)
  if (res.response == 1){
    await ctx.reply(`
      (1) В каком году в НГТУ введена должность ректора?
      (2) Найти методичку по начертательной геометрии первокурсника ИРИТ, или число с ней связанное
      (3)  В каком году Радиофак стал ФРТК? (последние 2 числа)
      (4)Как можно хорошо отдохнуть на сумму получившихся чисел?
      https://www.nntu.ru/structure/view/podrazdeleniya/nauchno-tehnicheskaya-biblioteka/resursy
    `)
  }
  else {
    await ctx.reply('Для продолжения работы требуется подписаться на группу Профбюро ИРИТ')
  }
  
})

bot.command(['марафон'], async (ctx)=>{
  let res = await isMember(ctx.message.from_id)
  if (res.response == 1){
    await ctx.reply(`
  - Глава Университета в 1917 году
  - Саша Белый
  - Иванович из дальнобойщиков
  Что общего у этих трёх людей и ПРОИСХОДЯЩИМ НА КАМЕРЕ?
  https://www.earthcam.com/usa/massachusetts/westtisbury/?cam=flyingskunk
  `)
  }
  else {
    await ctx.reply('Для продолжения работы требуется подписаться на группу Профбюро ИРИТ')
  }

})

bot.command(['Жизнь'], async (ctx)=>{
  let res = await isMember(ctx.message.from_id)
  if (res.response == 1){
    await ctx.reply('Дана последовательность ЛЛЛ, ККЛ, К, КЛ, ЛЛЛЛ. Что идёт дальше?')
  }
  else {
    await ctx.reply('Для продолжения работы требуется подписаться на группу Профбюро ИРИТ')
  }
  
})

bot.command(['сделка'], async (ctx)=>{
  let res = await isMember(ctx.message.from_id)
  if (res.response == 1){
    await ctx.reply('', "doc121545456_632461944")
  }
  else {
    await ctx.reply('Для продолжения работы требуется подписаться на группу Профбюро ИРИТ')
  }

})

bot.command(['размышление'], async (ctx)=>{
  let res = await isMember(ctx.message.from_id)
  if (res.response == 1){
    await ctx.reply('Стоит проверить группу...')
  }
  else {
    await ctx.reply('Для продолжения работы требуется подписаться на группу Профбюро ИРИТ')
  }

})

bot.command(['пустота'], async (ctx)=>{
  let res = await isMember(ctx.message.from_id)
  if (res.response == 1){
    await ctx.reply('https://www.whenwasiconceived.com/\nm i l ь f', 'audio121545456_456239149')
  }
  else {
    await ctx.reply('Для продолжения работы требуется подписаться на группу Профбюро ИРИТ')
  }

})

bot.command(['итог'], async (ctx)=>{
  let res = await isMember(ctx.message.from_id)
  if (res.response == 1){
    await ctx.reply('', 'video-187687824_456239020')
  }
  else {
    await ctx.reply('Для продолжения работы требуется подписаться на группу Профбюро ИРИТ')
  }

})

bot.command(['василий'], async (ctx)=>{
  let res = await isMember(ctx.message.from_id)
  if (res.response == 1){
    await ctx.reply('', "photo-187687824_457239024")
  }
  else {
    await ctx.reply('Для продолжения работы требуется подписаться на группу Профбюро ИРИТ')
  }
})

bot.on(async (ctx)=>{
  await ctx.reply('Добро пожаловать на HKEY, участник. Введите ключевое слово: ', null, null)
})

bot.startPolling((err) => {
    if (err) {
      console.error(err);
    }
  });