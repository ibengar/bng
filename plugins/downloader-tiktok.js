import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
    if (!args[0]) throw 'Uhm..url nya mana?'
    m.reply(wait)
    let res = await fetch(`https://ibeng-api.ddns.net/api/downloader/tiktok2?url=${args[0]}&apikey=ibeng`)
    if (!res.ok) throw await res.text()
    let json = await res.data.json()
    if (!json.status) throw json
    let { video } = json.result
    await conn.sendFile(m.chat, video, 'video.mp4', `
    `, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}

handler.help = ['tiktok <url>']
handler.tags = ['downloader']

handler.command = /^(tiktok)$/i
handler.limit = true

export default handler
