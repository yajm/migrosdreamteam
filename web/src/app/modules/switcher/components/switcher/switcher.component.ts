import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SwitchValue } from '../../model/switch-value';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss'],
})
export class SwitcherComponent implements OnInit {
  @Input()
  selected: SwitchValue = 'total';

  @Output()
  selectedChange = new EventEmitter<SwitchValue>();

  constructor() {}

  select(val: SwitchValue) {
    this.selected = val;
    this.selectedChange.emit(val);
  }

  ngOnInit(): void {}
}
