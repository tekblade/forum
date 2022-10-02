import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuardService } from './auth-guard.service';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { RedirectComponent } from './redirect/redirect.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'chat', component: ChatComponent,canActivate:[AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'redirect',component:RedirectComponent},
  {path: '', redirectTo: '/chat', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
