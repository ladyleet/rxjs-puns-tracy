import { RxjsPunsTracyPage } from './app.po';

describe('rxjs-puns-tracy App', () => {
  let page: RxjsPunsTracyPage;

  beforeEach(() => {
    page = new RxjsPunsTracyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
