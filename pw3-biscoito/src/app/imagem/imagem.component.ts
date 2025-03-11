import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.css'
})
export class ImagemComponent {

  @Input()foto : boolean = true;

  biscoito(){
    this.foto = !this.foto;
  }

}
