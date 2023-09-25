import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  gameCover:string = '';
  
  @Input()
  gameCoverAlt: string = '';

  @Input()
  gameType:string = 'DIGITAL PS4';

  @Input()
  gamePrice:string = 'R$';

  @Input()
  gameLabel:string = '';

}
