import { IonCard, IonFabButton, IonIcon, IonGrid, IonItem, IonRow, IonCol, IonButton, IonImg, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { add } from 'ionicons/icons';
import { remove} from 'ionicons/icons';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [
    IonImg,
    
    IonFabButton,
    IonIcon,
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
  iconAdd = add;
  remove= remove
  async OrderAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: 'Ha agregado correctamente el producto a su carrito',
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  
  cantidad: number = 0;

  constructor(private alertController: AlertController) {}

  increment() {
    this.cantidad += 1;
  }

  decrement() {
    if (this.cantidad > 0) {
      this.cantidad -= 1;
    }
  }

}
