import { MedjsAngularjs2FirebasePage } from './app.po';

describe('medjs-angularjs2-firebase App', function() {
  let page: MedjsAngularjs2FirebasePage;

  beforeEach(() => {
    page = new MedjsAngularjs2FirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('medjs-angularjs2-firebase works!');
  });
});
