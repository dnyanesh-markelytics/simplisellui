import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PaymentsComponent } from './payments/payments.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { MissingProfitComponent } from './missing-profit/missing-profit.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';

const routes: Routes = [{
  path:'profile',
  component:ProfileComponent
},{
  path:'payments',
  component:PaymentsComponent
},
{
  path:'bank-details',
  component:BankDetailsComponent
},
{
  path:'missing-profit',
  component:MissingProfitComponent
},
{
  path:'account-setting',
  component:AccountSettingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
