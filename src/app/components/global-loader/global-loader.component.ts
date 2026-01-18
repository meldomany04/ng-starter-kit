import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { LoadingService } from 'src/services/core/loading.service';

@Component({
  selector: 'app-global-loader',
  imports: [CommonModule, ProgressSpinnerModule],
  templateUrl: './global-loader.component.html',
  styleUrl: './global-loader.component.scss'
})
export class GlobalLoaderComponent {
  showText = true;

  constructor(public loadingService: LoadingService) {}

}
