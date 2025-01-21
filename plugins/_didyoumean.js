// Thanks To Kasan

let didyoumean = require('didyoumean')
let similarity = require('similarity')

let handler = m => m

handler.before = function (m, { match, usedPrefix, text, args }) {
	if ((usedPrefix = (match[0] || '')[0])) {
		let noPrefix = m.text.replace(usedPrefix, '').trim()
		let args = noPrefix.trim().split` `.slice(1)
		let alias = Object.values(global.plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
		if (alias.includes(noPrefix)) return
		let mean = didyoumean(noPrefix, alias)
		let sim = similarity(noPrefix, mean)
		let som = sim * 100
		let tio = `• Halo ngab @${m.sender.split`@`[0]}  Apakh Lwuh sedang mencari ${usedPrefix + mean} ? 

 ◦ Nama menu: *${usedPrefix + mean}* 
 ◦ Kempiripan: *${parseInt(som)}%*`
	 if (mean) this.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'IDR',
      requestFrom: '0@s.whatsapp.net',
      noteMessage: {
      extendedTextMessage: {
      text: moon,
      contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
	}
  }

module.exports = handler
