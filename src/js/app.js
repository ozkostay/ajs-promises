import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load()
  .then((respons) => {
    console.log('=== Возвращаем объект: ', respons);
  }, (error) => console.log(error));
