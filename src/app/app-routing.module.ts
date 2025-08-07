import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturaFormComponent } from './components/factura-form/factura-form.component';
import { FacturaListComponent } from './components/factura-list/factura-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'facturas', pathMatch: 'full' },
  { path: 'facturas', component: FacturaListComponent },
  { path: 'facturas/new', component: FacturaFormComponent },
  { path: 'facturas/edit/:id', component: FacturaFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
