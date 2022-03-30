import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppConstants } from './infrastructure/app.constant';

const routes: Routes = [
  {
    path: '',
    redirectTo: AppConstants.uiRoutes.login,
    pathMatch: 'full'
  },
  {
    path: AppConstants.uiRoutes.login,
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: AppConstants.uiRoutes.maharashtrianFestivalsList,
    loadChildren: () => import('./pages/maharashtrian-festivals-list/maharashtrian-festivals-list.module').then( m => m.MaharashtrianFestivalsPageModule)
  },
  {
    path: AppConstants.uiRoutes.register,
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./pages/folder.module').then( m => m.FolderPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
