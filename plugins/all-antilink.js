const isLinkTik = /tiktok.com/i // tambahin sendiri
const isLinkYt = /youtube.com|youtu.be/i // tambahin sendiri
const isLinkTel = /t.me/i // tambahin sendiri
const isLinkFb = /facebook.com|fb.me/i // tambahin sendiri
const isLinkIg = /instagram.com/i // tambahin sendiri
const isLinkHttp = /http|https/i // tambahin sendiri

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
	if (m.isBaileys && m.fromMe) return !0
	if (!m.isGroup) return !1
	let chat = global.db.data.chats[m.chat]
	let user = global.db.data.users[m.sender]
	let bot = global.db.data.settings[this.user.jid] || {}
	const isAntiLinkTik = isLinkTik.exec(m.text)
	const isAntiLinkYt = isLinkYt.exec(m.text)
	const isAntiLinkTel = isLinkTel.exec(m.text)
	const isAntiLinkFb = isLinkFb.exec(m.text)
	const isAntiLinkIg = isLinkIg.exec(m.text)
	const isAntiLinkHttp = isLinkHttp.exec(m.text)
	let hapus = m.key.participant
	let bang = m.key.id
	let bwah = `*Link Terdeteksi!* ${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`
	if (!isAdmin) {
		if (chat.antiLinkTik && isAntiLinkTik) {
			await conn.sendButton(m.chat, bwah, author, ['off antilinktik', '/disable antilinktik'], m)
			if (isBotAdmin) await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
		} else if (chat.antiLinkYt && isAntiLinkYt) {
			await conn.sendButton(m.chat, bwah, author, ['off antilinkyt', '/disable antilinkyt'], m)
			if (isBotAdmin) await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
		} else if (chat.antiLinkTel && isAntiLinkTel) {
			await conn.sendButton(m.chat, bwah, author, ['off antilinktel', '/disable antilinktel'], m)
			if (isBotAdmin) await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
		} else if (chat.antiLinkFb && isAntiLinkFb) {
			await conn.sendButton(m.chat, bwah, author, ['off antilinkfb', '/disable antilinkfb'], m)
			if (isBotAdmin) await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
		} else if (chat.antiLinkIg && isAntiLinkIg) {
			await conn.sendButton(m.chat, bwah, author, ['off antilinkig', '/disable antilinkig'], m)
			if (isBotAdmin) await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
		} else if (chat.antiLinkHttp && isAntiLinkHttp) {
		await conn.sendButton(m.chat, bwah, author, ['off antihatetepe', '/disable antihatetepe'], m)
			if (isBotAdmin) await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
		}
	
	return !0
}
