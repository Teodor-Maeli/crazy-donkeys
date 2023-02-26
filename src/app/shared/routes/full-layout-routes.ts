import { Routes } from '@angular/router';
export const Full_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full',
  },
  {
    path: 'terms-of-use',
    loadChildren: () =>
      import('../../terms-of-use/terms-of-use.module').then(
        (m) => m.TermsOfUseModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'privacy-policy',
    loadChildren: () =>
      import('../../privacy-policy/privacy-policy.module').then(
        (m) => m.PrivacyPolicyModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'cookie-policy',
    loadChildren: () =>
      import('../../cookie-policy/cookie-policy.module').then(
        (m) => m.CookiePolicyModule
      ),
    pathMatch: 'full',
  },
];
