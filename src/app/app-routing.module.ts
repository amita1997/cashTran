import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashTransComponent } from './cash-trans/cash-trans.component';

const routes: Routes = [
  {
    path:'', redirectTo:'cashtrans', pathMatch:'full'

  },
  {
    path:'cashtrans',
    component:CashTransComponent

  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
