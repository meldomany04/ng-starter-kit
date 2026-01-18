import { GlobalLoaderComponent } from '@/components/global-loader/global-loader.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, GlobalLoaderComponent],
    templateUrl: './app.component.html'
})
export class AppComponent {}
