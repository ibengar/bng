let fs = require('fs')
let { MessageType } = require('@adiwajshing/baileys')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return

   let regs = /(🗿)/i
   let isVertexThai = regs.exec(m.text)
   if (isVertexThai && !m.fromMe) {
   conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   }
   
   let regk = /(🗿)/i
   let isVertexSymbol = regk.exec(m.text)
   if (isVertexSymbol && !m.fromMe) {
   conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   }
   
   let regp = /(🗿)/i
   let isVertexsThai= regp.exec(m.text)
   if (isVertexsThai && !m.fromMe) {
   conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   }
   
   // tambahin sendiri code virus WhatsApp..
}

handler.botAdmin = true
handler.group = true
module.exports = handler
