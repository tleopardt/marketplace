import { Component, OnInit, ViewChild } from '@angular/core';
import product from '../../../assets/products/products.json';
import { IonSlides, ModalController } from '@ionic/angular';
import { ModalsComponent } from 'src/app/component/modals/modals.component';
import { FORM_EDIT, FORM_ADD, DETAIL_PRODUCT } from 'src/assets/utils/constant';
import { Search } from 'src/assets/utils/helpers';
import { Router } from '@angular/router';


@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.page.html',
  styleUrls: ['./marketplace.page.scss'],
})
export class MarketplacePage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;

  productList: object;
  activeCategory: number;
  isModalOpen: boolean;
  isModalType = {
    edit: FORM_EDIT,
    add: FORM_ADD,
    detailProduct: DETAIL_PRODUCT
  };

  stash: any[] = [];

  opts = {
    freeMode: true,
    slidesPerView: 3,
  };

  categories = [
    {
      name: 'Best Selling',
      icon: 'people-outline',
      value: 'best-selling'
    },
    {
      name: 'Jewelery',
      icon: 'diamond-outline',
      value: 'jewelery'
    },
    {
      name: 'Men Clothing',
      icon: 'shirt-outline',
      value: `men's clothing`
    },
    {
      name: 'Women Clothing',
      icon: 'woman-outline',
      value: `women's clothing`
    },
    {
      name: 'Electronics',
      icon: 'tv-outline',
      value: 'electronics'
    },
  ];

  constructor(private modalCtrl: ModalController, private route: Router) {
    this.productList = product;
    this.activeCategory = 0;
    this.isModalOpen = false;
    this.stash = [];
  }

  ngOnInit() {  }

  selectCategory(index) {
    // set category index and then filter the products
    this.activeCategory = index;
    this.slides.slideTo(index);
    this.filterProducts(this.categories[index].value);
  }

  handleSearch(e) {
    if (e.target.value === '') {
      if (this.activeCategory == 0) {
        this.productList = product;
      } else {
        this.productList = product.filter(x => x.category == this.categories[this.activeCategory].value);
      }
    } else {
      const result = Search(e.target.value, this.productList);
      this.productList = result;
    }
  }

  filterProducts(category) {
    if (category == this.categories[0].value) {
      this.productList = product;
    } else {
      const result = product.filter(x => x.category == category);
      this.productList = result;
    }
  }

  async openModal(value, type) {
    const modal = await this.modalCtrl.create({
      component: ModalsComponent,
      cssClass: type == DETAIL_PRODUCT ? 'custom-modal' : '',
      componentProps: {...value, typeOf: type, stash: this.stash}
    });

    modal.present();
  }

  openStash() {
    this.route.navigate(['/stash'], { state: { stash: this.stash } });
  }
}
