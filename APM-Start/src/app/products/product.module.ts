import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { StarComponent } from '../shared/star.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pip';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',
        canActivate: [ProductGuardService],
        component: ProductDetailComponent },
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  providers: [
    ProductGuardService,
    ProductService
  ]
})
export class ProductModule { }
