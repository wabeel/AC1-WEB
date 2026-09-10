import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-playlist',
  styleUrl: './playlist.css',
  templateUrl: './playlist.html',
})
export class Playlist {
  playlist: string[] = ['replay - shinee', 'love - wave to earth', 'coincidências - jão', 'evidências - chitãozinho e xororó', 'fire truck - nct 127' ];
  curtidas: number = 0;
  selecionada: string = '';
  mostrar = false;
  musica: string = '';
  tocando: boolean = false;

   adicionarItem(item: string) {
    if (item.trim()) { 
      this.playlist.push(item);

     }
   }
curtir(): void {
    this.curtidas++;
  }

  descurtir(): void {
    this.curtidas--;
  }

  selecionarMusica(musica: string): void {
    this.selecionada = musica;
    this.tocando = false;
  }

  alternarTocando(): void {
    this.tocando = !this.tocando;
  }

}
