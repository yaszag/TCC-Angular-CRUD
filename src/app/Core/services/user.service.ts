import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { User } from 'src/app/Shared/models/user.';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.url;
  constructor(private http: HttpClient) { }

  /**
   * Fetch Data from Api And return all users as observable
   */

  getUsers(): Observable<any>  {
    return this.http
      .get<{ data: User[] }>(`${this.url}/users`)
      .pipe(catchError(this.handleError));
  }
  getUserById(id) {
    return this.http.get<User>(`${this.url}/users/${id}`)
    .pipe(catchError(this.handleError));
  }
  UpdateUser(id,user) {
    return this.http.put<User>(`${this.url}/users/${id}`, user)
    .pipe(catchError(this.handleError));
  }

  AddUser(user) {
    return this.http.post<User>(`${this.url}/users`, user)
    .pipe(catchError(this.handleError));
  }

  DeleteUser(id) {
    return this.http.delete<User>(`${this.url}/users/${id}` )
    .pipe(catchError(this.handleError));
  }

    /**
   * handle Error
   */
  private handleError(error: any) {
    
      return throwError(error.error)   ;
    }
 
  
   }

