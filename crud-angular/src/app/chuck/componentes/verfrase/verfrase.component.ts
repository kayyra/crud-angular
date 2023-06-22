import { Component } from '@angular/core';
import { ApiService } from "../../servicios/api.service";
import { Frase } from "../../modelos/frase";

@Component({
  selector: 'app-verfrase',
  templateUrl: './verfrase.component.html',
  styleUrls: ['./verfrase.component.scss']
})
export class VerfraseComponent {
  public frase: Frase = { value: "", icon_url: "", id: "", url: "" };
  
  constructor(private apiservice: ApiService) {
  }

  ngOnInit() {
    this.apiservice.getFrase().subscribe(frase => (this.frase = frase));
  }
  
}
