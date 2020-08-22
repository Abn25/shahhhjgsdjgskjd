const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
const onfinished = require("on-finished");
var guilds = {};
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
  console.log('|===================================|');
  console.log(`|  Users Size ${client.users.size}  |`);
  console.log(`| Guilds Size ${client.guilds.size} |`);
  console.log(`|===================================|`);
  console.log(`| Created By <@532325977921945603>  |`);
  console.log(`|===================================|`);
  console.log(`|        ArtBot Log By You !        |`);
  console.log(`|===================================|`);
});

let profile = JSON.parse(fs.readFileSync("./profile/profile.json", "utf8"))
client.on("message", message => {
  if (message.author.bot) return;
 if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    tite: '$title',
    rep: 1,
   reps: 'NOT YET',
   lastDaily:'Not Collected',
    level: 1,
    points: 1,
    credits: 1,
  };
fs.writeFile('./profile/profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});

client.on('message', message => {
 
    if(message.content.startsWith(prefix + "rep" ) || message.content === ("$r") || message.content === ("$R") ) {
      if(!message.channel.guild) return;
                    moment.locale('en');
                  var getvalueof = message.mentions.users.first()
                    if(!getvalueof) return message.channel.send(`**:mag: |  ${message.author.username}, the user could not be found.**`);
                       if(getvalueof.id == message.author.id) return message.channel.send(`**${message.author.username}, you cant give yourself a reputation !**`)
    if(profile[message.author.id].reps != moment().format('L')) {
            profile[message.author.id].reps = moment().format('L');
            profile[getvalueof.id].rep = Math.floor(profile[getvalueof.id].rep+1);
         message.channel.send(`** :up:  |  ${message.author.username} has given ${getvalueof} a reputation point!**`)
        } else {
         message.channel.send(`**:rolling_eyes: |  ${message.author.username}, you can award more reputation in  ${moment().endOf('day').fromNow()} **`)
        }
       }
       fs.writeFile('./profile/profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
client.on("message", (message) => {
  let men = message.mentions.users.first()
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
if(message.content.startsWith(prefix + "credits") || message.content === ("$credit") || message.content === ("$c") || message.content === ("$C") ) {
  if(men) {
  if (!profile[men.id]) profile[men.id] = {
   lastDaily:'Not Collected',
   credits: 1,
 };
  }
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance ` + " is `" + `${profile[men.id].credits}$` + "`.**")
} else {
 message.channel.send(`** :bank: | ${message.author.username}, your account balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
}
}
if(message.content.startsWith(prefix + "daily")  || message.content === ("$d") || message.content === ("$D") ) {

  if(profile[message.author.id].lastDaily != moment().format('day')) {
   profile[message.author.id].lastDaily = moment().format('day')
   profile[message.author.id].credits += 793
    message.channel.send(`** :moneybag: | ${message.author.username} you received your :dollar: **793** daily credits!**`)}
 else {
    message.channel.send(`**:rolling_eyes: | ${message.author.username}, your daily credits refreshes in ${moment().endOf('day').fromNow()}**`)
}
}
let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(2);
let sender = message.author
if(message.content.startsWith(prefix + "credits") || message.content === ("$c") || message.content === ("$C") ) {
          if (!args[0]) {
            message.channel.send(``);
         return;
           }
        // We should also make sure that args[0] is a number
    
 if(isNaN(args[0]) || args[0] < 0) return message.channel.send('')
             if(profile[message.author.id].credits < args[0]) return message.channel.send("")
if(args[0].startsWith("$profile")) return  message.channel.send('**!! I Cant Do it**');
				 let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(``);
            if(defineduser.id === message.author.id) return message.channel.send("")
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 310;
fs.writeFile('./profile/profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
var x = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
var x2 = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` **Amount :** \`${args}\` \n  **Type these numbers to confirm : ** \`${x[x3]}\` `).then(msg1=> { 
        var r = message.channel.awaitMessages(msg => msg.content == x2[x3], { maxMatches : 1, time : 60000, errors : ['time'] })
        r.catch(() => {
            message.delete()
            r.delete()
            message.delete()
            message.channel.sendEmbed(embed)
        })
        r.then(s=> {
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
mentionned.send(` :credit_card: | Transfer Receipt \`\`\`You have received ${args[0]} from user ${message.author.username} ; (ID (${message.author.id})\`\`\``);
               message.channel.sendEmbed(embed)
        })
        })
        
		




}

      });

client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
   if (message.author.bot) return;

if (message.content.startsWith(prefix + "level")) {

 message.channel.send(`**<@${message.author.id}> You level is ${profile[message.author.id].level}**`);
   }
   fs.writeFile("./profile/profile.json", JSON.stringify(profile), (err) => {
     if (err) console.error(err)
   });

 });

 client.on('message', message => {
          moment.locale('eg'); 
          if(!profile[message.author.id]) profile[message.author.id] ={
              points: 1,
              level: 1
          };
          if(message.author.bot) return;
          profile[message.author.id].points = Math.floor(profile[message.author.id].points+1);
          if(profile[message.author.id].points > 100) {
              profile[message.author.id].points = 1
              profile[message.author.id].level = Math.floor(profile[message.author.id].level+1);
              message.channel.send(`**Level UP! <@${message.author.id}> just reached level ${profile[message.author.id].level}**`)
          }
          fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
      });

client.on('message', message => {
        let tit = message.content.split(" ").slice(1).join(" ");
        if(message.content.startsWith(prefix + "title")) {
        if(!profile[message.author.id].tite) profile[message.author.id].tite = "Hey im using ArtBot"
        if(!tit) {
            message.channel.send("**:large_orange_diamond: $title <something>**");
        } else {
            profile[message.author.id].tite = tit
            message.channel.send(`** ~~Done~~** `)
        }
        }
        fs.writeFile('./profile/profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
    })

    client.on("message", message => {
  if (message.author.bot) return;
	if(!message.channel.guild) return;
if(message.content.startsWith(prefix + "profile") || message.content === ("$p") || message.content === ("$P") ) {
  let user = message.mentions.users.first();
         var men = message.mentions.users.first();
            var heg;
            if(men) {
                heg = men
            } else {
                heg = message.author
            }
          var mentionned = message.mentions.members.first();
             var h;
            if(mentionned) {
                h = mentionned
            } else {
                h = message.member
            }
            var ment = message.mentions.users.first();
            var getvalueof;
            if(ment) {
              getvalueof = ment;
            } else {
              getvalueof = message.author;
            }
   var mentionned = message.mentions.users.first();

    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;

      }
if (!profile[getvalueof.id]) profile[getvalueof.id] = {points: 1,reps: "NOT YET",credits: 1, level: 1,tite: "#title", rep: 1, lastDaily: "NOT COLLECTED"};
            let Image = Canvas.Image,
            canvas = Canvas.createCanvas(300, 300),
            ctx = canvas.getContext('2d');
 var r1 = ["./luxy.png"]

let r2 = r1[Math.floor(Math.random() *r1.length)]
                   fs.readFile(r2, function (err, Background) { //امتداد الصورة
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 300, 300); // حجم الصورة

})

 
                let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + "luxy.png" : getvalueof.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
 
                        //ur name
                        ctx.font = 'bold 13px Comic Sans MS'; // حجم الخط و نوعه
                        ctx.fontSize = '24px'; // عرض الخط
                        ctx.fillStyle = "#000000"; // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${getvalueof.username}`, 151, 165) // احداثيات اسمك
 
                        //ur name
                        ctx.font = 'bold 13px Comic Sans MS'; // حجم الخط و نوعه
                        ctx.fontSize = '30px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`${getvalueof.username}`, 149, 165) // احداثيات اسمك
 
                        //credit
                        ctx.font = "bold 12px Arial" // نوع الخط وحجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].credits}`, 225, 145) // احداثيات المصاري
 
                        //poits
                        ctx.font = "bold 12px Arial" // ن
                        ctx.fontSize = '10px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].points}`, 71, 145) // احداثيات النقاط
 
                        //Level
                        ctx.font = "bold 28px Arial" // نوع الخط و حجمه
                        ctx.fontSize = '30px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].level}`, 228, 99) // احداثيات اللفل
 
                         //info
                        ctx.font = "bold 12px Arial" // ن
                        ctx.fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#000000" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].title}`, 151, 190) // احداثيات النقاط
 
                        //info
                        ctx.font = "bold 12px Arial" // ن
                        ctx.fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].tite}`, 150, 190) // احداثيات النقاط
 
                        // REP
                        ctx.font = "bold 24px  Arial";
                        ctx.fontSize = "40px";
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`+${profile[getvalueof.id].rep}`, 70,99)
 
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                      
                        ava.src = buf;   
                        ctx.beginPath();
                        ctx.beginPath();
                        ctx.arc(150, 100, 43, 0, Math.PI*2, true);
                        ctx.closePath();
                        ctx.clip();
                        ctx.drawImage(ava, 106, 57, 87, 86);
 
message.channel.startTyping();    
message.channel.stopTyping();
message.channel.sendFile(canvas.toBuffer())   
})
})
}
});

////
client.on('message',async message => { // تعريف ال message
    let alias = message.content.split(" ")[0].substring(prefix.length); // تعريف alias
    let args = message.content.split(" "); // أستخدام الأرجس
    let devs = ["532325977921945603"]; // هنا تحط ايدي الديف الي مسموح لهم بـ زياده الكريدتس
    let mention = message.mentions.users.first() || message.author // تعريف المنشن
    if(alias === "addc") { // تعريف الكوماند
    let args = message.content.split(" "); //أستخدام الأرجس مره ثانيه
    if(!devs.includes(message.author.id)) return; // اذا واحد من الديف كتب الرسالة ولكن كانت فاضيه
    if(!args[1] || isNaN(args[1])) return message.reply("**Please Sir, Can you Type A Credits?**") // يرد عليه ويقله اكتب الكريدتس
    if(!profile[mention.id]) return; // هنا لو منشن الشخص
    profile[mention.id].credits += (+args[1]); // يزيد له  العدد
    fs.writeFileSync("./cr.json", JSON.stringify(profile));  // هنا يسجل بـ الجسون 
    console.log(profile[mention.id]) // هنا يكتب بلكاونسل بأنه زاد كريدتس للشخص الي منشنه او لنفسه
    message.reply(`**Done Sir!, I Have been Adedd Money For you!  : \`${args[1]}\`**`); // هنا يرد عليه بأنه زاد و العدد
    }
});




client.login('NzI3MTg5OTE0NDY2MTIzODM4.XvoOYg.sdEQFGz3NsKI-vOl0a5p7y_Vvj0');