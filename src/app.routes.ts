import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from '@/components/dashboard/dashboard.component';
import { NotfoundComponent } from '@/components/notfound/notfound.component';
import { AuthCallbackComponent } from '@/components/authentication/auth-callback/auth-callback.component';
import { LogoutCallbackComponent } from '@/components/authentication/logout-callback/logout-callback.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: DashboardComponent }
        ],
        canActivate: [AuthGuard],
    },
    { path: 'notfound', component: NotfoundComponent },
    {
      path: 'signin-oidc',
      component: AuthCallbackComponent
    },
    {
      path: 'account/logout',
      component: LogoutCallbackComponent
    },
    { path: '**', redirectTo: '/notfound' }
];
