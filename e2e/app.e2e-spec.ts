import { HHDONATORSPage } from './app.po';

describe('hh-donators App', () => {
  let page: HHDONATORSPage;

  beforeEach(() => {
    page = new HHDONATORSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
