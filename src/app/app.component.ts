import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductComponent } from "./components/product/product.component";
import { Product } from './models/product.model';
import { NgFor } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet,
      RouterLink,
      ContactComponent,
    ]
})
export class AppComponent {
  title = 'bigmario-app';

  changeTitle() {
    this.title = 'changed';
  }
}
