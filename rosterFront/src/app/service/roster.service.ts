import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../globals';
import {catchError, tap} from 'rxjs/operators';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Roster} from '../class/roster';

@Injectable({
  providedIn: 'root'
})
export class RosterService {
  constructor(private http: HttpClient) { }
  url= Globals.APP_API +'/roster/27';
  public getRosters() {
    return this.http.get<any>(`${this.url}`);
  }

  public register(data) {
    const obj = {
      rostername: data.rostername,
      email: data.email,
      password: data.password
    };
    return this.http.post(Globals.APP_API + '/roster/new', obj);
  }
}
