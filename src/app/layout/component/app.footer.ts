import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-footer',
    template: `<div class="layout-footer">
        Mohamed Abdou
        <a href="https://meldomany.github.io/Portfolio/#home" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">Meldomany</a>
    </div>`
})
export class AppFooter {}
