import { Selector } from 'testcafe';

fixture `Index Page`
  .page `http://localhost:3000`

test('Test index page', async t => {
  await t
  .expect(Selector('#users-api-title').innerText).eql('Example users API call');
});

test('Test demo button', async t => {
  await t
  .expect(Selector('#starter-h1').innerText).eql('Bootstrap starter template')
  .click('#frontpage-test-btn')
  .expect(Selector('#starter-h1').innerText).eql('Button has been clicked!');
});
