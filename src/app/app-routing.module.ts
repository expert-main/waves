import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', loadChildren: './auth/register/register.module#RegisterPageModule' },
  { path: 'address-book', loadChildren: './auth/address-book/address-book.module#AddressBookPageModule' },
  { path: 'farafina', loadChildren: './auth/farafina/farafina.module#FarafinaPageModule' },
  { path: 'fingerprint', loadChildren: './fingerprint/fingerprint.module#FingerprintPageModule' },
  { path: 'passcode', loadChildren: './passcode-verify/passcode-verify.module#PasscodeVerifyPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
