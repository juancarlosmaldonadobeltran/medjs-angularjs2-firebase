export class MedjsAngularjs2FirebasePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('medjs-angularjs2-firebase-app h1')).getText();
  }
}
