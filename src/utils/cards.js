export const shuffleCards = (cards) => {
  for (let i = 0; i < cards.length; i++) {
    const j = Math.floor(Math.random() * cards.length);
    let temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
  cards.forEach((card, idx) => {
    card.matched = false;
    card.id = idx;
  });

  return cards;
};
