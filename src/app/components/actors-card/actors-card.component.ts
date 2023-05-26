import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-actors-card',
  templateUrl: './actors-card.component.html',
  styleUrls: ['./actors-card.component.css']
})
export class ActorsCardComponent {
  @Input() actorsList:any;
}
