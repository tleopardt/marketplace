import { Component, OnInit } from '@angular/core';
import { Search } from 'src/assets/utils/helpers';
import product from '../../../assets/products/products.json';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.page.html',
  styleUrls: ['./transaction-history.page.scss'],
})
export class TransactionHistoryPage implements OnInit {
  stashList: any[] = [];

  constructor() {
    this.stashList = product;
  }

  ngOnInit() {
  }

  handleSearch(e) {
    if (e.target.value === '') {
      this.stashList = product;
    } else {
      const result = Search(e.target.value, this.stashList);
      this.stashList = result;
    }
  }
}
