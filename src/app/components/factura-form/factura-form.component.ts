import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Factura } from 'src/app/models/factura';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'app-factura-form',
  templateUrl: './factura-form.component.html',
  styleUrls: ['./factura-form.component.scss']
})
export class FacturaFormComponent {
  factura: Factura = { id: 0, name: '', address: '', total: 0 };
  isEditMode: boolean = false;

  constructor(
    private facturaService: FacturaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.facturaService.getById(+id).subscribe(data => this.factura = data);
    }
  }
  save(): void {
    if (this.isEditMode) {
      this.facturaService.update(this.factura).subscribe(() => this.router.navigate(['/facturas']));
    } else {
      this.facturaService.create(this.factura).subscribe(() => this.router.navigate(['/facturas']));
    }
  }
}
