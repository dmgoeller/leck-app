import { Injectable } from '@angular/core';

import { Counter } from './models/counter';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counters: Counter[] = [
    { coffeeType: 'L', value: 0 },
    { coffeeType: 'E', value: 0 },
    { coffeeType: 'C', value: 0 },
    { coffeeType: 'K', value: 0 }
  ];

  constructor() {
  }

  getCounters(): Counter[] {
    return this.counters;
  }
}
