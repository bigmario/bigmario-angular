import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';


export const routes: Routes = [
  {
    path: 'contact',
    title: 'Contacto',
    component: ContactComponent
  },
  {
    path: 'products',
    title: 'Productos',
    component: ProductsComponent
  }
];
