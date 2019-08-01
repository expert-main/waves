import { Component, OnInit } from '@angular/core';
import { MbscNumpadDecimalOptions } from '@mobiscroll/angular';
import { inspect } from 'util';

@Component({
  selector: 'app-passcode-verify',
  templateUrl: './passcode-verify.page.html',
  styleUrls: ['./passcode-verify.page.scss'],
})
export class PasscodeVerifyPage implements OnInit {

  numpad: number;
  numpadSettings: MbscNumpadDecimalOptions = {
    scale: 0,
    max: 9999,
    tap: true,
    thousandsSeparator: '',
    focusTrap: true,
    buttons: [],
    focusOnClose: true,
    showOverlay: true,
    anchor: "<input>",
  };

  constructor() { }

  ngOnInit() {
  }

}
