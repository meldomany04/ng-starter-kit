import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom, inject, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import Aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { appRoutes } from './app.routes';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { AuthService } from './services/auth.service.ts';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TRANSLATE_HTTP_LOADER_CONFIG, TranslateHttpLoader } from '@ngx-translate/http-loader';

function initAuth(authService: AuthService) {
  return () => authService.initLogin();
}

export function httpLoaderFactory(http: HttpClient) {
  const loader = new TranslateHttpLoader();
  // The loader will use the injected HttpClient and config automatically
  return loader;
}

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(
            appRoutes, 
            withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }), 
            withEnabledBlockingInitialNavigation()
        ),
        provideHttpClient(
            withInterceptors([AuthInterceptor])
        ),
        provideOAuthClient(),
        {
            provide: APP_INITIALIZER,
            useFactory: initAuth,
            deps: [AuthService],
            multi: true
        },
        provideAnimationsAsync(),
        providePrimeNG({ 
            theme: { 
                preset: Aura, 
                options: { 
                    darkModeSelector: '.app-dark',
                    // cssLayer: {
                    //     name: 'primeng',
                    //     order: 'tailwind-base, primeng, tailwind-utilities'
                    // }
                } 
            },
            ripple: false,
            inputStyle: 'outlined'
        }),
        {
            provide: TRANSLATE_HTTP_LOADER_CONFIG,
            useValue: {
                prefix: './assets/i18n/',
                suffix: '.json'
            }
        },
        importProvidersFrom(
        TranslateModule.forRoot({
            defaultLanguage: 'ar',
            loader: {
            provide: TranslateLoader,
            useFactory: httpLoaderFactory,
            deps: [HttpClient]

            }
        }))
    ]
};