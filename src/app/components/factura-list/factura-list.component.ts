import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/factura';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'app-factura-list',
  templateUrl: './factura-list.component.html',
  styleUrls: ['./factura-list.component.scss']
})
export class FacturaListComponent implements OnInit {
  facturas: Factura[] = [];

  constructor(private facturaService: FacturaService) {}

  ngOnInit(): void {
    this.loadFacturas();
  }

  loadFacturas(): void {
    this.facturaService.getAll().subscribe(data => this.facturas = data);
  }

  deleteFactura(id: number): void {
    this.facturaService.delete(id).subscribe(() => this.loadFacturas());
  }
}
