import GameSavingLoader from '../GameSavingLoader';

test('GameSavingLoader load()', async (done) => {
  const data = await GameSavingLoader.load();
  expect(typeof data).toBe('object');
  done();
});
