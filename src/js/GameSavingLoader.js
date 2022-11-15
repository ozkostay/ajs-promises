import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      resolve(read()
        .then((data) => json(data))
        .then((jsonString) => JSON.parse(jsonString)));
    });
  }
}
