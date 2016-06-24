import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MedjsAngularjs2FirebaseAppComponent } from '../app/medjs-angularjs2-firebase.component';

beforeEachProviders(() => [MedjsAngularjs2FirebaseAppComponent]);

describe('App: MedjsAngularjs2Firebase', () => {
  it('should create the app',
      inject([MedjsAngularjs2FirebaseAppComponent], (app: MedjsAngularjs2FirebaseAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'medjs-angularjs2-firebase works!\'',
      inject([MedjsAngularjs2FirebaseAppComponent], (app: MedjsAngularjs2FirebaseAppComponent) => {
    expect(app.title).toEqual('medjs-angularjs2-firebase works!');
  }));
});
