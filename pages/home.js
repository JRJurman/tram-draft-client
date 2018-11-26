const Tram = require('tram-one')
const html = Tram.html({
  'app-header': require('../elements/app-header')
})

module.exports = (store, actions, params) => {
  if (!store.draft) return html`<div>Loading</div>`
  const pickCard = cardIndex => event => {
    actions.pickCard({playerIndex: params.player, packIndex: cardIndex})
  }
  const cards = store.draft.players[params.player].pack.map((card, cardIndex) =>
    html`<button onclick=${pickCard(cardIndex)}>${card}</button>`
  )
  return html`
    <div>
      Draft:
      ${JSON.stringify(store.draft.players[params.player])}
      <div>
        ${cards}
      </div>
    </div>
  `
}
