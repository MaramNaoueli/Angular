import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ResidencesComponent } from './residences/residences.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  {path:'products',component:ProductComponent},
  {path:'residences',
    component:ResidencesComponent,
    children: [{ path: 'wishList', component:WishListComponent},
      
    ]
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
