import { AngularMeAppPage } from './app.po';

describe('angular-me-app App', () => {
  let page: AngularMeAppPage;

  beforeEach(() => {
    page = new AngularMeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
