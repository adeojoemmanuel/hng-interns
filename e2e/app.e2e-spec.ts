import { HNGInternsPage } from './app.po';

describe('hnginterns App', function() {
  let page: HNGInternsPage;

  beforeEach(() => {
    page = new HNGInternsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
