import { Ng2RedditPage } from './app.po';

describe('ng2-reddit App', () => {
  let page: Ng2RedditPage;

  beforeEach(() => {
    page = new Ng2RedditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
