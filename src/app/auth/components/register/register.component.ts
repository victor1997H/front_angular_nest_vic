import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,              // 👈 AGREGADO
  imports: [],                   // 👈 AGREGADO (aunque esté vacío)
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
