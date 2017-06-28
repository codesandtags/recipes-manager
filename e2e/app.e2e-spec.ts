import { RecipesManagerPage } from './app.po';

describe('recipes-manager App', () => {
  let page: RecipesManagerPage;

  beforeEach(() => {
    page = new RecipesManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
