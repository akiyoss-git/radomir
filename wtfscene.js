const Scene = require('node-vk-bot-api/lib/scene');
const Markup = require('node-vk-bot-api/lib/markup');
const XMLHttpRequest = require('xhr2');

module.exports = new Scene('wtf', 
    async (ctx) => {
        ctx.scene.next();
        var question = 'Первая загадка такова: Чего в интернете больше '
        requests = new XMLHttpRequest();
        requests.open("POST", "https://pelevin.gpt.dobro.ai/generate/", true);
        requests.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        requests.setRequestHeader("Access-Control-Allow-Origin","*");
        requests.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
        requests.onreadystatechange = function() { 
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                console.log(JSON.parse(requests.response).replies[0])
                question = question + JSON.parse(requests.response).replies[0] + '?'
                ctx.reply(question)
            }
        }
        requests.send(JSON.stringify({
            "length": 15,
            "prompt": question
    }));},
    async (ctx) => {
        ctx.scene.next();
        var question = 'Вторая ничем не хуже: А чего в инетернете меньше '
        requests = new XMLHttpRequest();
        requests.open("POST", "https://pelevin.gpt.dobro.ai/generate/", true);
        requests.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        requests.setRequestHeader("Access-Control-Allow-Origin","*");
        requests.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
        requests.onreadystatechange = function() { 
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                console.log(JSON.parse(requests.response).replies[0])
                question = question + JSON.parse(requests.response).replies[0] + '?'
                ctx.reply(question)
            }
        }
        requests.send(JSON.stringify({
            "length": 15,
            "prompt": question
    }));},
    async (ctx) => {
        ctx.scene.next();
        var question = 'Третья будет с подковыркой: Чего в интернете столько же, сколько и '
        requests = new XMLHttpRequest();
        requests.open("POST", "https://pelevin.gpt.dobro.ai/generate/", true);
        requests.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        requests.setRequestHeader("Access-Control-Allow-Origin","*");
        requests.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
        requests.onreadystatechange = function() { 
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                console.log(JSON.parse(requests.response).replies[0])
                question = question + JSON.parse(requests.response).replies[0] + '?'
                ctx.reply(question)
            }
        }
        requests.send(JSON.stringify({
            "length": 15,
            "prompt": question
    }));},
    async (ctx) => {
        ctx.scene.next();
        var question = 'Четвертая будет ERROR ERROR EXCEPTION ERROR///// Тьфу ты, опять вирусняк... Так вот: Как скачать '
        requests = new XMLHttpRequest();
        requests.open("POST", "https://pelevin.gpt.dobro.ai/generate/", true);
        requests.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        requests.setRequestHeader("Access-Control-Allow-Origin","*");
        requests.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
        requests.onreadystatechange = function() { 
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                console.log(JSON.parse(requests.response).replies[0])
                question = question + JSON.parse(requests.response).replies[0] + '?'
                ctx.reply(question)
            }
        }
        requests.send(JSON.stringify({
            "length": 15,
            "prompt": question
    }));},
    async (ctx) => {
        ctx.scene.next();
        var question = 'И последняя, пятая, самая сложная... Как звали бы взломщика, если '
        requests = new XMLHttpRequest();
        requests.open("POST", "https://pelevin.gpt.dobro.ai/generate/", true);
        requests.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        requests.setRequestHeader("Access-Control-Allow-Origin","*");
        requests.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
        requests.onreadystatechange = function() { 
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                console.log(JSON.parse(requests.response).replies[0])
                question = question + JSON.parse(requests.response).replies[0] + '?'
                ctx.reply(question)
            }
        }
        requests.send(JSON.stringify({
            "length": 15,
            "prompt": question
    }));},
    async (ctx) => {
        ctx.scene.next();
        ctx.reply('', 'audio2864433_380991797_48c404276579832bb8', Markup
        .keyboard([
          [
            Markup.button('ЧТО ЭТО ТАКОЕ?'),
          ]
        ])
        .oneTime(true))
    },
    async (ctx) => {
        ctx.scene.leave();
        ctx.reply('ОПА, касперский вирус отловил, пока мы с тобой развлекались ахаха. Спасибо, что составил компанию! Еще увидимся!', null, Markup
        .keyboard([
          [
            Markup.button('Эмм... Не за что?'),
          ]
        ])
        .oneTime(true))
    },
)
