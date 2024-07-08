import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MultiContentProjectionComponent } from './multi-content-projection/multi-content-projection.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ParentComponent } from './parent/parent.component';

export const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'login', component: LoginPageComponent },
  // { path: 'mcp', component: MultiContentProjectionComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: 'parent', component: ParentComponent },
];
