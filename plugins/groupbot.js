let handler = async (m, { conn }) => {
let info = `
*${htki} GROUP BOT ${htka}*
`
const sections = [
   {
	title: `๐๐ข๐๐ก ๐๐ ๐๐ฅ๐จ๐ฃ ๐ข๐๐๐๐๐๐๐ ๐ฆ๐๐๐ก๐ก ๐๐ข๐ง*\n\n\nโโโใ Dแดษด'แด าแดสษขแดแด Dแดษดแดแดษชแดษด ใโโโ`,
	rows: [
	    {title: '๐ โบ Group GOGOTS BOT', description: "Group Utama GOGOTS BOT", rowId:".gcbot"},
        {title: 'โ๏ธ โบ Grup GOGOTS', description: "Group Kedua", rowId:".gcbot2"},
        {title: '๐ง โบ Group Full Bot', description: "Gruop Ketiga", rowId:".gcbot3"},
        {title: '๐ โบ Owner', description: "Creator GOGOTS BOT >ฯ<", rowId:".owner"},
        {title: '๐งฟ โบ Info GOGOTS BOT', description: "Info GOGOTS BOT >ฯ<", rowId:".info"},
        {title: '๐ฎ โบ Donasi', description: "Donasi Untuk GOGOTS โงโฝโฆ", rowId:".donasi"},
	    ]
      },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "Klik di sini",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "๐ Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['groupbot']
handler.tags = ['info']
handler.command = /^(groupbot)$/i

export default handler