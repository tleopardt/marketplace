import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { defaultImage, FORM_ADD, FORM_EDIT, DETAIL_PRODUCT } from 'src/assets/utils/constant';
import { NavigationExtras, Router } from '@angular/router';
import { ERROR_400 } from 'src/assets/utils/message-error';
import { SUCCESS_ADD_TO_STASH } from 'src/assets/utils/message-success';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss'],
})

export class ModalsComponent implements OnInit {
  @Input() typeOf = '';
  @Input() image = defaultImage;
  @Input() title: '';
  @Input() count: '';
  @Input() price: '';
  // @Input() sendToCart;
  @Input() stash: any[] = [];
  headerType: string;
  itemActive: boolean;

  // ---- stash state list
  productQty: number;

  isModalType = {
    edit: FORM_EDIT,
    add: FORM_ADD,
    detailProduct: DETAIL_PRODUCT
  };


  constructor(private modalCtrl: ModalController, private toastController: ToastController, private route: Router) {
    this.productQty = 0;
    this.itemActive = false;
  }

  ngOnInit() {
    this.headerType = this.typeOf == DETAIL_PRODUCT ? 'ion-no-border' : '';
  }

  async pushNotification(data) {
    const toast = await this.toastController.create(data);
    toast.present();
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  changePhoto(e) {
    const reader = new FileReader();
    const newPhoto = (e.target as HTMLInputElement).files[0];
    reader.readAsDataURL(newPhoto);

    reader.onload = (event) => {
      this.image = event.target.result as string;
    };
  }

  addQty() {
    this.productQty = this.productQty + 1;
  }

  removeQty() {
    if (this.productQty == 0) { } // --- if product quantity is empty return nothing
    else {
      this.productQty = this.productQty - 1;
    }
  }

  toggleActive() {
    this.itemActive = !this.itemActive;
  }

  AddToCart() {
    if (this.productQty == 0) {
      this.pushNotification(ERROR_400);
    } else {

      const data = {
        title: this.title,
        image: this.image,
        price: this.price,
        quantity: this.productQty
      };

      this.stash.push(data);

      this.pushNotification({
        ...SUCCESS_ADD_TO_STASH,
        buttons: [
          this.productQty !== 0 &&
            {
              side: 'end',
              text: 'Check Out',
              handler: () => {
                const navigationExtras: NavigationExtras = {
                  queryParams: {
                    state: JSON.stringify(this.stash)
                  }
                };
                this.dismissModal();
                this.route.navigate(['/stash'], { state: { stash : this.stash } });
              }
            }
        ]
      });
    }
  }
}
