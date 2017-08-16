import { SA44Day1Page } from './app.po';

describe('sa44-day1 App', () => {
  let page: SA44Day1Page;

  beforeEach(() => {
    page = new SA44Day1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
