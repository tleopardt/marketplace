import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stash',
  templateUrl: './stash.page.html',
  styleUrls: ['./stash.page.scss'],
})
export class StashPage implements OnInit {
  stashList: any[] = [];
  total: number;

  constructor(private router: Router) {
    const props = this.router.getCurrentNavigation().extras.state;
    this.stashList = props ? props.stash : [];
  }

  ngOnInit() {
    this.countTotal();
  }

  countTotal() {
    this.total = this.stashList ? this.stashList.reduce((a, b) => a + (b.price * b.quantity), 0).toFixed(2) : 0;
  }

  addQty(i) {
    this.stashList[i].quantity =  this.stashList[i].quantity + 1;
    this.countTotal();
  }

  removeQty(i) {
    console.log(i);
    if (this.stashList[i].quantity == 1) {
      this.stashList.splice(i, 1); // --- if product quantity is 1, will remove the product
    }
    else {
      this.stashList[i].quantity = this.stashList[i].quantity - 1;
    }
    this.countTotal();
  }
}
