import { ServicesPage } from './app.po';

describe('services App', () => {
  let page: ServicesPage;

  beforeEach(() => {
    page = new ServicesPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
