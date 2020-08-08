import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestArrayService {
  people = [
    {
      "id": 3788,
      "firstname": "John",
      "lastname": "Smith",
      "email": "jsmith@gmail.com",
      "username": "jsmith",
      "instance_id": "21a7a6",
      "created_at": "2020-07-15T17:38:52.196Z",
      "updated_at": "2020-07-15T17:38:52.196Z"
    },
    {
      "id": 3789,
      "firstname": "Katie",
      "lastname": "Holmes",
      "email": "kholmes@yahoo.com",
      "username": "kholmes",
      "instance_id": "21a7a6",
      "created_at": "2020-07-15T17:38:52.206Z",
      "updated_at": "2020-07-15T17:38:52.206Z"
    },
    {
      "id": 3790,
      "firstname": "Johnny",
      "lastname": "Depp",
      "email": "jdepp@fastemail.com",
      "username": "jdepp",
      "instance_id": "21a7a6",
      "created_at": "2020-07-15T17:38:52.212Z",
      "updated_at": "2020-07-15T17:38:52.212Z"
    },
    {
      "id": 3791,
      "firstname": "Matt",
      "lastname": "Damon",
      "email": "mdamon@mdamon.com",
      "username": "mdamon",
      "instance_id": "21a7a6",
      "created_at": "2020-07-15T17:38:52.217Z",
      "updated_at": "2020-07-15T17:38:52.217Z"
    },
    {
      "id": 3792,
      "firstname": "Johnny",
      "lastname": "Cash",
      "email": "jcash@earthlink.net",
      "username": "jcash",
      "instance_id": "21a7a6",
      "created_at": "2020-07-15T17:38:52.224Z",
      "updated_at": "2020-07-15T17:38:52.224Z"
    }
  ]

  getPeople() {
    return this.people;
  }

  constructor() { }
}
