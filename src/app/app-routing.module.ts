import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventsSettingsComponent} from './events-settings/events-settings.component';
import {DonorsListComponent} from './donors-list/donors-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: DonorsListComponent},
  {path: 'events-settings', component: EventsSettingsComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
