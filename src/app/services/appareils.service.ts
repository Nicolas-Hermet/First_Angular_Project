import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilsService {
  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'ordinateur',
      status: 'éteint'
    }
  ];
  constructor() { }
}
