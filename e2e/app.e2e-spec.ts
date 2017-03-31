import { MunabPage } from './app.po';

describe('munab App', function() {
  let page: MunabPage;

  beforeEach(() => {
    page = new MunabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
