const fetch = require('node-fetch')

module.exports = {
  init: () => false,
  setDraft: (draft, newDraft) => newDraft,
  fetchDraft: (draft, _, actions) => {
    fetch('http://localhost:4545/')
      .then(res => res.json())
      .then(body => actions.setDraft(body.draft))
    return draft
  },
  pickCard: (draft, data) => {
    fetch('http://localhost:4545/pickCard', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
    return draft
  }
}
