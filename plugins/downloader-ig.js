import xa from 'xfarr-api'

let handler = async(m, { conn, text, usedPrefix, command }) => {
	if (!text) return m.reply(`*Usage : ${usedPrefix + command} url*\n\nExample :\n${usedPrefix + command} https://www.instagram.com/p/CU0MhPjBZO2/`)
	if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
	if (!text.includes('instagram.com')) return m.reply(`Invalid Instagram URL.`)
    try {
		let anu = await xa.downloader.instagram(`${text}`)
		if (anu.media.length == 0) throw new e()
		for (var x of anu.media) {
			let fimg = await fetch(x.url)
			let fimgb = Buffer.from(await fimg.arrayBuffer())
			if (Buffer.byteLength(fimgb) < 22000) throw new e()
			await conn.sendFile(m.chat, fimgb, '', `Downloader igtv, post, video, reel, etc`, m)
		}
	
}

handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig(dl)?)$/i

export default handler
