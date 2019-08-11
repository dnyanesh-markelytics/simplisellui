import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { PaymentsComponent } from './payments/payments.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { MissingProfitComponent } from './missing-profit/missing-profit.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfileComponent, PaymentsComponent, BankDetailsComponent, MissingProfitComponent, AccountSettingComponent, LeftMenuComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule
  ]
})
export class ProfileModule { }
