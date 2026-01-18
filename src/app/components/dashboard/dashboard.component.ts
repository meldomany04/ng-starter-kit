import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AuthService } from 'src/services/core/auth.service.ts';
import { ProductsService } from 'src/services/core/products.service';
@Component({
    selector: 'app-dashboard',
    imports: [CardModule, ButtonModule, TranslateModule],
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  constructor(private authService: AuthService, private productService: ProductsService) {}

  ngOnInit() {
    this.me()
  }

  async logout(){
    await this.authService.logout();
  }

  me(){
    this.productService.me();
  }
}
