module.exports = {
  init: () => null,
  join: (_, room, actions) => {
    const socket = new WebSocket(`ws://localhost:4545/join`)
    socket.onmessage = ({ data }) => {
      const message = JSON.parse(data)
      actions.setDraft(message.draft)
    }
    return socket
  }
}
