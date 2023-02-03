import { Routes } from '@angular/router';
export const Full_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full',
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('../../contacts/contacts.module').then((m) => m.ContactsModule),
    pathMatch: 'full',
  },
  {
    path: 'terms-of-use',
    loadChildren: () =>
      import('../../terms-of-use/terms-of-use.module').then((m) => m.TermsOfUseModule),
    pathMatch: 'full',
  },
];
