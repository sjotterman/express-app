import { Selector } from 'testcafe';

fixture `Index Page`
  .page `http://localhost:3000`

test('Test index page', async t => {
  await t
  .expect(Selector('#users-api-title').innerText).eql('Example users API call');

});
