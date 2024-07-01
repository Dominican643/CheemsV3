const fs = require('fs')
const chalk = require('chalk')

// ganti info bot dibawah ini
global.botName = "𝙎 𝞘 𝙂 𝞖 ㋛ 𝞑 𝞗 𝙏 ...."
global.ownerName = "𝙎 𝞘 𝙂 𝞖 ㋛ ᵍʳᵉʸ........"
global.ownerNumber = ["2348145099774"] 

global.Auto_Typing = false // auto typing
global.Auto_Recording = false // auto recording
global.Auto_ReadPesan = false // auto read messages

// Auto Downloader Tiktok
global.TiktokAutoDownload = false

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
