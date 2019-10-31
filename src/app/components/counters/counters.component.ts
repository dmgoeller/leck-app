import { Component, OnInit } from '@angular/core';
import { Counter } from '../../models/counter';
import { CounterService } from '../../counter.service';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.sass']
})
export class CountersComponent implements OnInit {

  values: number[];
  counters: Counter[];

  constructor(private counterService: CounterService) {
    this.values = Array(100);

    for (let i = 0; i < this.values.length; i++) {
      this.values[i] = i;
    }
  }

  ngOnInit() {
    this.counters = this.counterService.getCounters();
  }

  maxValue(): number {
    return this.values[this.values.length - 1];
  }

  decrementValue(counter) {
    if (counter.value > 0) {
      counter.value--;
    }
  }

  incrementValue(counter) {
    if (counter.value < this.maxValue()) {
      counter.value++;
    }
  }
}
