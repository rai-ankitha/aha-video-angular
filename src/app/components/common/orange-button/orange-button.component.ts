import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-orange-button',
  templateUrl: './orange-button.component.html',
  styleUrls: ['./orange-button.component.css']
})
export class OrangeButtonComponent {
  @Input() label: any;
  @Output() onClick = new EventEmitter<any>();
  
  onClickButton(event:any) {
      this.onClick.emit(event);
    }
}
