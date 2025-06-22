let bowling = {
  players: [
    { name: 'Livio', scores: [] },
    { name: 'Paola', scores: [] },
    { name: 'Filippo', scores: [] },
    { name: 'Giuseppe', scores: [] },
    { name: 'Luca', scores: [] },
    { name: 'Marco', scores: [] },
    { name: 'Andrea', scores: [] },
    { name: 'Giorgio', scores: [] },
    { name: 'Alessandro', scores: [] },
  ],

  assegna_Punteggi: function () {
    this.players.forEach(player => {
      player.scores = [];
      for (let i = 1; i <= 10; i++) {
        player.scores.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
      }
      console.log(player.scores);
      
    });
  },

  nuovo_player: function (nome) {
    let new_player = { name: nome, scores: [] };
    for (let i = 1; i <= 10; i++) {
        new_player.scores.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
      }
      this.players.push(new_player);
      console.log(new_player.scores);
  },

  punteggio_Giocatori: function () {
    this.players.forEach(player => {
    let tot = player.scores.reduce((acc, num)=> acc + num);
    player.totale = tot;
    console.log(player.name + ':'+ player.totale);
    
  });
  this.players.sort((a, b) => b.totale - a.totale);
  },

  vincitore: function () {
    let winner = this.players[0];
    console.log(`Il vincitore è: ${winner.name} con ${winner.totale}`);
  },

  mostra_classifica: function () {
    console.log(`Classifica finale`);
    this.players.forEach(player => {
      console.log(`${player.name}: ${player.totale}`);
    });
  },
}

bowling.assegna_Punteggi();
bowling.nuovo_player('Emanuele');
bowling.punteggio_Giocatori();
bowling.vincitore();
bowling.mostra_classifica();