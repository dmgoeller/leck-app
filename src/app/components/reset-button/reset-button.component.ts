import { Component, OnInit } from '@angular/core';
import { Counter } from '../../models/counter';
import { CounterService } from '../../counter.service';

@Component({
  selector: 'app-reset-button',
  templateUrl: './reset-button.component.html',
  styleUrls: ['./reset-button.component.sass']
})
export class ResetButtonComponent implements OnInit {

  counters: Counter[];

  constructor(private counterService: CounterService) {
  }

  ngOnInit() {
    this.counters = this.counterService.getCounters();
  }

  disabled(): Boolean {
    for (let counter of this.counters) {
      if (counter.value > 0) {
        return false;
      }
    }
    return true;
  }

  reset() {
    for (let counter of this.counters) {
      counter.value = 0;
    }
  }
}
