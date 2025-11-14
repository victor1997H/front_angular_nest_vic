import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';

// Componentes standalone
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({

  providers: [
    AuthService
  ],

  declarations: [],  // <-- vacío porque tus componentes son standalone

  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginComponent,      // <-- standalone import
    RegisterComponent    // <-- standalone import
  ]
})
export class AuthModule { }
