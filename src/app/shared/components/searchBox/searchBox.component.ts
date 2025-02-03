import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './searchBox.component.css',
})
export class SearchBoxComponent {

  // Esto es un input para recibir el placeholder del input
  @Input()
  public placeholder: string = '';

  // Esto es un output para emitir el valor del input al padre
  @Output()
  public onValue = new EventEmitter<string>();

  // Con este método se ejecuta cuando el input cambia su valor y lo emite al padre
  emitValue(value: string):void {
    this.onValue.emit(value);
  }
}
