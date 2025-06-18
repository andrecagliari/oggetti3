let bowling = {
  players: [
    { name: 'Livio', scores: [] },
    { name: 'Paola', scores: [] },
    { name: 'Filippo', scores: [] },
    { name: 'Giuseppe', scores: [] }
  ],

  generaPunteggi: function () {
    this.players.forEach(player => {
      player.scores = [];
      for (let i = 0; i < 10; i++) {
        player.scores.push(Math.floor(Math.random() * 10) + 1);
      }
    });
    this.calcolaTotali();
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
    nuovo.total = nuovo.scores.reduce((a, b) => a + b, 0);
    this.players.push(nuovo);
  },

  trovaVincitore: function () {
    this.calcolaTotali();
    return this.players.reduce((max, player) =>
      player.total > max.total ? player : max
    );
  },

  classificaFinale: function () {
    this.calcolaTotali();
    let ordinati = [...this.players].sort((a, b) => b.total - a.total);
    let output = '<h3>📋 Classifica Finale:</h3><ol>';
    ordinati.forEach(player => {
      output += `<li>${player.name} - ${player.total} punti</li>`;
    });
    output += '</ol>';
    document.getElementById('output').innerHTML = output;
  }
};

function aggiornaOutput() {
  let html = '<h3>🎯 Giocatori:</h3>';
  bowling.players.forEach(player => {
    html += `<p><strong>${player.name}</strong>: ${player.scores.join(', ')} (Totale: ${player.total})</p>`;
  });
  document.getElementById('output').innerHTML = html;
}

function aggiungiGiocatore() {
  let nome = document.getElementById('nuovoGiocatore').value.trim();
  if (nome) {
    bowling.aggiungiGiocatore(nome);
    aggiornaOutput();
    document.getElementById('nuovoGiocatore').value = '';
  }
}

function mostraVincitore() {
  let vincitore = bowling.trovaVincitore();
  document.getElementById('output').innerHTML =
    `<h3>🏅 Vincitore: ${vincitore.name} con ${vincitore.total} punti! 🏅</h3>`;
}
