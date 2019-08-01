declare var require: any;
import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-farafina',
  templateUrl: './farafina.page.html',
  styleUrls: ['./farafina.page.scss'],
})
export class FarafinaPage implements OnInit {
  napole_info: { address: string, id: string } = {
    address: '3P94YZpC8qrCvdRQ5uBcQ8PKcvFkrpid4A9',
    id: 'WxdWhP61ihypyG6RofZtTThWhigrEcULRjDwum4eWwT',
  };

  farafina: { tx_quantity: number, balance: number, tx_type: string, tx_name: string } = {
    tx_quantity : null,
    balance : null,
    tx_type : null,
    tx_name : '',
  };

  constructor(private http: HttpClient) {
    const WavesAPI = require('@waves/waves-api');
    const Waves = WavesAPI.create(WavesAPI.MAINNET_CONFIG);
    http.get('http://localhost:3000/api/v1/articles').subscribe((response) => {
        console.log(response);
    });
    // const seed = Waves.Seed.create();
    // console.log(seed.phrase);
    // console.log(seed.address);
    // console.log(seed.keypair);
    // console.log(seed);
    // const password = "1234";
    // const encrypted = seed.encrypt(password);
    // console.log(encrypted);
  // get balance
    Waves.API.Node.assets.balance(this.napole_info.address, this.napole_info.id).then((balance) => {
      this.farafina.balance = balance.balance / 100000000;
    });
    Waves.API.Node.transactions.get(this.napole_info.id).then((tx) => {
      this.farafina.tx_name = tx.name;
      this.farafina.tx_quantity = tx.quantity / 10^15;
      // this.farafina.tx_type = tx.type;
      if(tx.type == 3){
        this.farafina.tx_type = 'Sent';
        this.farafina.tx_quantity = -tx.quantity / 10000000000000000;
      }
    });
    // Waves.API.Node.transactions.getList(this.napole_info.address).then((txList) => {
    //   console.log(txList);
    // });
  }

  ngOnInit() {
  }

}
