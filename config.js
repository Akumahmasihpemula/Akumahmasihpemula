global.owner = ['62895331520602']  
global.mods = ['62852838062621'] 
global.prems = ['62852838062621']
global.nameowner = 'Mas moon'
global.numberowner = '62852838062621' 
global.mail = 'followigHayangmodol.pptx@gmail.com' 
global.gc = 'FOLLOW IG HAYANGMODOL.PPTX'
global.instagram = 'https://instagram.com/hayangmodol.pptx'
global.wm = '© Moon'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot Whatsap moon'
global.maxwarn = '3' // Peringatan maksimum Warn

global.autobio = true // Set true/false untuk mengaktifkan atau mematikan autobio (default: false)
global.antiporn = true // Set true/false untuk Auto delete pesan porno (bot harus admin) (default: true)
global.spam = true // Set true/false untuk anti spam (default: true)
global.gcspam = false // Set true/false untuk menutup grup ketika spam (default: false)
    


//INI WAJIB DI ISI!//
global.btc = 'kUBuzpLr' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'eVUJlbcT'
//Daftar https://api.betabotz.eu.org 

//Gausah diganti
global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}

global.APIKeys = { 
  'https://api.botcahx.eu.org': global.btc
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
