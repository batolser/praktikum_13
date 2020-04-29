
const cardsRouter = require('express').Router(); // создали роутер
const { getCards, createCard, deleteCard } = require('../controllers/card');

cardsRouter.get('/cards', getCards);
cardsRouter.post('/cards', createCard);
cardsRouter.delete('/cards/:cardId', deleteCard);

module.exports = cardsRouter;
