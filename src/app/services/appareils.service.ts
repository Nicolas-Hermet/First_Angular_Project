import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppareilsService {

  appareilSubject = new Subject<any[]>();
  // private myUrl = require('../../../env.json')['myUrl'].toString();
  private myUrl = require('../../../env.json')['myUrl'] + '/appareils.json';
  private appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'ordinateur',
      status: 'éteint'
    }
  ];

  constructor(private httpClient: HttpClient) { }

  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice());
  }

  switchOnAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'allumé';
    }
    this.emitAppareilSubject();
  }

  switchOffAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'éteint';
    }
    this.emitAppareilSubject();
  }

  switchOnOne(i: number) {
    this.appareils[i].status = 'allumé';
    this.emitAppareilSubject();
  }

  switchOffOne(i: number) {
    this.appareils[i].status = 'éteint';
    this.emitAppareilSubject();
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }

  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils.length;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

  saveAppareilsToServer() {
    this.httpClient
    .put(this.myUrl, this.appareils)
    .subscribe(
      () => {
        console.log('Enregistrement Terminé !');
      },
      (error) => {
        console.log('Il y a une erreur d\'enregistrement en base : ' + error);
      }
    );
  }

  getAppareilsFromServer() {
    this.httpClient
    .get<any[]>(this.myUrl)
    .subscribe(
      (Response) => {
        this.appareils = Response;
        this.emitAppareilSubject();
        console.log('Chargement des datas ok');
      },
      (error) => {
        console.log('Erreur de chargement de la base : ' + error);
      }
    );
  }
}
