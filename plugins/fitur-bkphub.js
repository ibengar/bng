import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {

    if (command == 'caribokep') {
    if (!text) throw `Contoh penggunaan ${usedPrefix}${command} japan`
    let links
    try {
    links = `https://ibeng-api.ddns.net/api/downloader/xvideo?query=${text}&apikey=ibeng`
            } catch {
            links = `https://ibeng-api.ddns.net/api/downloader/xnxx?query=${text}&apikey=ibeng`
            }
            let f = await fetch(links)
let xx = await f.json()
let str = xx.result.map((v, index) => {
        return `${1 + index}. Judul *${v.title}*
Info: ${v.info}
Link: ${v.link}`.trim()
    }).join('\n\n')
    await conn.sendButton(m.chat, str, wm, null, [
                ['Dlbokep!', `${usedPrefix}dlbokep ${xx.result[0].link}`]
            ], fakes, adReply)
    }
   
  if (command == 'caribokep2') {
  if (!text) throw `Contoh penggunaan ${usedPrefix}${command} japan`
  let links
    try {
    links = `https://ibeng-api.ddns.net/api/downloader/xnxx?query=${text}&apikey=ibeng`
            } catch {
            links = `https://ibeng-api.ddns.net/api/downloader/pornhub?query=${text}&apikey=ibeng`
            }
let f = await fetch(links)
let xx = await f.json()
let str = xx.result.map((v, index) => {
        return `${1 + index}. Judul *${v.title}*
Link: ${v.link}`.trim()
    }).join('\n\n')
    await conn.sendButton(m.chat, str, wm, null, [
                ['Search!', `${usedPrefix + command}`]
            ], fakes, adReply)
    }
    
    if (command == 'dlbokep') {
    if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`
    try {
  let json = await fetch(`https://ibeng-api.ddns.net/api/downloader/xnxxdl?url=${text}&apikey=ibeng`)
  let x = await json.json()
  let caption = `*Title:* ${x.result.title}
  *duration:* ${x.result.duration}
  *view:* ${x.result.view}
  *rating:* ${x.result.rating}
  *like:* ${x.result.like}
  *dislike:* ${x.result.dislike}
  *comment:* ${x.result.comment}
  *tag:* ${Array.from(x.result.tag)}
  *description:* ${x.result.description}
  `
conn.sendFile(m.chat, x.result.link[1].link, 'asupan.mp4', caption, m)
} catch (e) {
let json = await fetch(`https://ibeng-api.ddns.net/api/downloader/xnxxdl?url=${text}&apikey=ibeng`)
  let x = await json.json()
  let caption = `*Title:* ${x.result.title}
  `
conn.sendFile(m.chat, x.result.files.high, 'asupan.mp4', caption, m)

}
}

}

handler.help = ['caribokep', 'caribokep2', 'dlbokep'].map(v => v + ' <app>')
handler.command = ['caribokep', 'caribokep2', 'dlbokep']
handler.tags = ['nsfw']

export default handler
