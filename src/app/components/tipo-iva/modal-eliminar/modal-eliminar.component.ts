import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogData } from 'src/app/models-tipo/TipoDialogData';
import { TipoIvaService } from 'src/app/services/tipo-iva.service';
import { ListarComponent } from '../listar/listar.component';

@Component({
  selector: 'app-modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrls: ['./modal-eliminar.component.scss']
})
export class ModalEliminarComponent implements OnInit {

  id: number = 0;

  constructor(
    public dialogRef: MatDialogRef<ListarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private readonly tipoivaService: TipoIvaService,
    private readonly router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDelete() {
    this.tipoivaService.deleteIVA(this.id).subscribe(response => {
      this.onNoClick();
    });
    // setTimeout(() => {
    //   location.reload();
    // }, 500);
  }

}
