import { Component, OnInit } from '@angular/core';
import { DBStorage } from '../../../services/dbstorage.service';
import { AddressBookPage } from '../address-book/address-book.page';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: { address: string, name: string } = {
    address: '',
    name: ''
  };
  constructor( private dbstorage: DBStorage, public navCtrl: NavController, public router: Router ) {
  }

  ngOnInit() {
  }

  get() {
      this.dbstorage.setValue(this.user.name, this.user.address);
      this.router.navigate(['/address-book']);
  }

}
