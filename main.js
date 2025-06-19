let bowling = {
  players: [
    { name: 'Livio', scores: [] },
    { name: 'Paola', scores: [] },
    { name: 'Filippo', scores: [] },
    { name: 'Giuseppe', scores: [] }
  ],

  assegnaPunteggi: function () {
    this.players.forEach(player => {
      player.scores = [];
      for (let i = 0; i < 10; i++) {
        player.scores.push(Math.floor(Math.random() * 10) + 1);
      }
    });
  },

  calcolaTotali: function () {
    this.players.forEach(player => {
      player.total = player.scores.reduce((a, b) => a + b, 0);
    });
  },

  aggiungiGiocatore: function (nome) {
    let nuovo = {
      name: nome,
      scores: []
    };
    for (let i = 0; i < 10; i++) {
      nuovo.scores.push(Math.floor(Math.random() * 10) + 1);
    }
    this.players.push(nuovo);
  },

  aggiungiGiocatoreDOM: function () {
    let nome = document.getElementById('nomeGiocatore').value.trim();
    if (nome) {
      this.aggiungiGiocatore(nome);
      document.getElementById('nomeGiocatore').value = '';
    }
  },

  classifica: function () {
    this.calcolaTotali();
    this.players.sort((a, b) => b.total - a.total);
  },

  getVincitore: function () {
    const vincitore = this.players[0];
    document.getElementById('vincitore').innerText = `${vincitore.name} con ${vincitore.total} punti`;
  },

  mostraClassifica: function () {
    let ul = document.getElementById('listaClassifica');
    ul.innerHTML = '';
    this.players.forEach((player, index) => {
      let li = document.createElement('li');
      li.innerText = `${index + 1}. ${player.name} → ${player.total} punti`;
      ul.appendChild(li);
    });
  }
};

window.onload = () => {
  bowling.assegnaPunteggi();
  bowling.classifica();
  bowling.mostraClassifica();
  bowling.getVincitore();
};
