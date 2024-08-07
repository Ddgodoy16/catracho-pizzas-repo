import { IonCard, IonGrid, IonItem, IonRow, IonCol, IonButton, IonImg, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [
    IonImg,
    IonCard,
    IonGrid, 
    IonItem, 
    IonRow,
    IonButton,
    IonCol,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle
  ],
})
export class ProductCardComponent  {
  cantidad: number = 0;

  constructor() {}

  increment() {
    this.cantidad+=1;
  }

  decrement() {
    if (this.cantidad > 0) {
      this.cantidad-=1;
    }
  }

}
