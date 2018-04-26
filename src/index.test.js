import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
 it('should pass', () => {
  expect(true).to.equal(true);
 });
});

describe('index.html', () => {
  it('should have div that explains the users table', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function(err, window) {
      const usersApiTitle = window.document.getElementById('users-api-title');
      expect(usersApiTitle.innerHTML).to.equal('Example users API call') ;
      done();
      window.close();
    });
  });
});
