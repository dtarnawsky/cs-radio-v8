import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonRadioGroup } from '@ionic/angular/standalone';
import { Account } from '../account';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonRadioGroup, ItemComponent, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  accounts: Account[] = [
    { name: 'John' },
    { name: 'Jane' },
    { name: 'Bob' },
    { name: 'Alice' },
  ];
  accountSelected: Account = this.accounts[0];

  constructor() { }

  radioChange() {
    console.log('radio change', this.accountSelected);
  }
}
