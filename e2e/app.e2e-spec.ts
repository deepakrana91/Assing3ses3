import { Assing3ses3Page } from './app.po';

describe('assing3ses3 App', () => {
  let page: Assing3ses3Page;

  beforeEach(() => {
    page = new Assing3ses3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
