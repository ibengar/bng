import fetch from 'node-fetch'
import axios from 'axios'
import { tiktok } from "social_media_downloader"
let handler = async (m, { conn, usedPrefix, command, text, args }) => {
if (!args[0]) throw 'Masukkan Link'
try {
let p = await tiktok(args[0])
    if (!p.link) throw 'Can\'t download video!'
    let cap = `*「 T I K T O K 」*
                 
*📛Nickname:* ${p.dev}
*📒Description:* ${p.description}
*Url:* ${p.url}
`.trim()
conn.send2ButtonVid(m.chat, p.link, cap, author, `No Wm`, `.tiktok ${args[0]}`, `Audio`, `.tiktokaudio ${args[0]}`, fakes, adReply)
} catch (e) {
    throw eror
    }
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^tt(tiktok(d(own(load(er)?)?|l))?|td(own(load(er)?)?|l))$/i

export default handler
