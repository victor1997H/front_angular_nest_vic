import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [],
  template: `
    <h1>{{ titulo }}</h1>
    <p>
      nosotros works!
    </p>
  `,
  styles: ``
})
export class NosotrosComponent {
  public titulo: string = "acerca de nosotros";
}
