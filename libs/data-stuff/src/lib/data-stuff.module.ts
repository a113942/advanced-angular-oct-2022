import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataStuffComponent } from './data-stuff.component';
import { RouterModule, Routes } from '@angular/router';
import { CrmComponent } from './components/crm/crm.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { featureName, reducers } from './state';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffects } from './state/effects/customer.effects';

const routes: Routes = [
  {
    path: '',
    component: DataStuffComponent,
    children: [
      {
        path: 'crm',
        component: CrmComponent,
      },
    ],
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([CustomerEffects]),
    HttpClientModule,
  ],
  declarations: [
    DataStuffComponent,
    CrmComponent,
  ],
})
export class DataStuffModule {}
