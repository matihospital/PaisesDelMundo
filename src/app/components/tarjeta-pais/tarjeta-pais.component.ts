import { Component, OnInit } from '@angular/core';

import { Pais } from 'src/app/models/paises';
import { PaisesService  } from 'src/app/services/paises.service'

@Component({
  selector: 'app-tarjeta-pais',
  templateUrl: './tarjeta-pais.component.html',
  styleUrls: ['./tarjeta-pais.component.css']
})
export class TarjetaPaisComponent implements OnInit {

  Items: Pais[] = [] ;
  
  constructor(private PaisesService : PaisesService) { }

  ngOnInit(): void {
    this.getPaises();
  }

  getPaises(){
    this.PaisesService.getPaises().subscribe(
      (res:Pais[] )=> {
        this.Items = res;
        console.log(res)
      }
    );
  }

}
