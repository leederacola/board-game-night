// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';

// import { Person } from 'src/app/models/person';


// import { MessageService } from './message.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class PersonService {

//   getPeople(): Observable<Person[]> {
//     this.messageService.add("GameService: fetched people");
//     return of (PEOPLE);
//   }

//   getPerson(id: number): Observable<Person>{
//     this.messageService.add('GameService: fetched game id=${id}');
//     return of(PEOPLE.find(person => person.id === id));
//   }

//   constructor(private messageService: MessageService) { }
// }
