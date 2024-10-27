const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    react: "📑",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, generateWAMessageFromContent, MessageType, prepareWAMessageMedia, proto, reply}) => {


    
try{
const config = await readEnv();
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '',
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
 }
}

/*
let madeMenu = `╔═════════════════════════◊
*👏 HI ${pushname}*
╠ *🎬 ᎠϴᏔΝᏞϴᎪᎠ ᏟϴᎷᎷᎪΝᎠՏ 🎬*
${menu.download}
╠ *👨‍💻 ᎷᎪᏆΝ ᏟϴᎷᎷᎪΝᎠՏ 👨‍💻*
${menu.main}
╠ *👨‍👨‍👦‍👦 ᏀᎡϴႮᏢ ᏟϴᎷᎷᎪΝᎠՏ 👨‍👨‍👦‍👦*
${menu.group}
╠ *👤 ϴᏔΝᎬᎡ ᏟϴᎷᎷᎪΝᎠՏ 👤*
${menu.convert}
╠ *🔍 ՏᎬᎪᎡᏟᎻ ᏟϴᎷᎷᎪΝᎠՏ 🔎*
${menu.search}
*This bot was created by the DARK-X-TEAM, more information about this bot will be posted on our channel. Keep following the channel.👇*
*👥 https://whatsapp.com/channel/0029ValzLhUBqbrFa8tMPg3U 👥*
╚═════════════════════════◊
©👨‍💻 DARK-X-TEAM 👨‍💻`
    
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})
*/


let bodyMessage = `╔═════════════════════════◊
*👏 HI ${pushname}*

*This bot was created by the DARK-X-TEAM, more information about this bot will be posted on our channel. Keep following the channel.👇*
*👥 https://whatsapp.com/channel/0029ValzLhUBqbrFa8tMPg3U 👥*
╚═════════════════════════◊
©👨‍💻 DARK-X-TEAM 👨‍💻`;

let footerMessage = '';

let headerOptions = {
    title: "",
    gifPlayback: false,
    subtitle: "",
    hasMediaAttachment: false,
};

const msg = generateWAMessageFromContent(mek.key.remoteJid, {
    viewOnceMessage: {
        message: {
            messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: bodyMessage
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: footerMessage
                }),
                header: proto.Message.InteractiveMessage.Header.create(headerOptions),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                  { name: 'single_select',
              buttonParamsJson: JSON.stringify({
                 title: 'Click Here',                        
              sections: [{                            
                title: 'Please select a sub menu',
                highlight_label: 'ARAbdulla-Dev',
                    rows: [{
                       title: '🎬 ᎠϴᏔΝᏞϴᎪᎠ ᏟϴᎷᎷᎪΝᎠՏ 🎬',
                       //description: ``,
                       id: config.PREFIX + `downmenu`
                    }, {
                       title: '👨‍💻 ᎷᎪᏆΝ ᏟϴᎷᎷᎪΝᎠՏ 👨‍💻',
                      //description: ``,
                       id: config.PREFIX + `mainmenu`
                    }, {
                       title: '👨‍👨‍👦‍👦 ᏀᎡϴႮᏢ ᏟϴᎷᎷᎪΝᎠՏ 👨‍👨‍👦‍👦',
                       //description: ``,
                       id: config.PREFIX + `groupmenu`
                    }, {
                       title: '👤 ϴᏔΝᎬᎡ ᏟϴᎷᎷᎪΝᎠՏ 👤',
                       //description: ``,
                       id: config.PREFIX + `ownermenu`
                    }, {
                       title: '🔍 ՏᎬᎪᎡᏟᎻ ᏟϴᎷᎷᎪΝᎠՏ 🔎',
                       //description: ``,
                       id: config.PREFIX + `searchmenu`
                    }]
                 }]
              })
           }]
                }),
                contextInfo: {
                    mentionedJid: [mek.remoteJid],
                    forwardingScore: 0,
                    isForwarded: false,
                }
            }),
        },
    },
}, {});

await conn.relayMessage(mek.key.remoteJid, msg.message, {
    messageId: msg.key.id
});


}catch(e){
console.log(e)
reply(`${e}`)
}
})
