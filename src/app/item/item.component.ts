import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Account } from '../account';
import { IonRadio, IonItem } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  standalone: true,
  imports: [IonItem, IonRadio, FormsModule]
})
export class ItemComponent implements OnChanges {

  @Input() account!: Account;
  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('item changes', changes);
  }

  changed() {
    console.log('changed');
  }


}
