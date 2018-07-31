import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Game } from './models/game';
import { Person } from './models/person';

@Injectable({
  providedIn: 'root'
})
export class FirepersonService {
  //path inn db
  private dbPath ='/person';
  // list of retrived data
  peopleRef: AngularFireList<Person> = null;
  

  

  constructor(private db: AngularFireDatabase) {
    this.peopleRef = db.list(this.dbPath);
   }

   addPerson(person: Person): void {
     this.peopleRef.push(person);
   }

   getPeopleList(): AngularFireList<Person> {
     return this.peopleRef;
   }

   
}
