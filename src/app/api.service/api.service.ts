import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";

// import { IResponseToken } from "./model/response.model";
import { IResponseUsersPage } from "./model/users-page-response.interface";
import { User } from "./model/user.model";
// import { IReport } from "./model/response.model";

const url = "https://frontend-test-assignment-api.abz.agency/api/v1";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private _nextUrl: string;
  private _totalUsers: number;

  public createUserList = (): User[] => new Array<User>(0);

  constructor(private _http: HttpClient) {}

  // private _httpRequestGet(url: string): Observable<any> {
  // return this._http.get<IResponseUsersPage>(url).pipe(catchError(err)=>of(err.user));
  // }

  getUsers(count: number = 3, page: number = 1): Observable<User[]> {
    const requestStr = `${url}/users?page=${page}&count=${count}`;
    return this._http.get<IResponseUsersPage>(requestStr).pipe(
      map(({ users, total_users, links: { next_url } }): User[] => {
        this._nextUrl = next_url; // save the next page url
        this._totalUsers = total_users; // save the total users, to check user list changes
        return users;
      })
    );
  }

  getNextUsers(): Observable<User[]> {
    return this._http.get<IResponseUsersPage>(this._nextUrl).pipe(
      map(({ users, total_users, links: { next_url } }): User[] => {
        this._nextUrl = next_url; // save the next page url
        if (this._totalUsers === total_users)
          // save the total users, to check user list changes
          return users;
        else return users;
      })
    );
  }

  // public getToken(): Observable<IResponseToken> {
  //   return this._http.get<IResponseToken>(`${url}/token`);
  // }

  // public getUsersPage(
  //   page: number,
  //   count: number
  // ): Observable<IResponseUsersPage> {
  //   const requestStr = `${url}/users?page=${page}&count=${count}`;
  //   let response: IResponseUsersPage;

  //   this._http.get<IResponseUsersPage>(requestStr).subscribe(
  //     ({ users }: IResponseUsersPage) => {
  //       response.users = users;
  //     },
  //     error => {
  //       //
  //     }
  //   );

  //   return Observable.create();
  // }

  // public getUser(id: number): Observable<IResponseUser> {
  // return this._http
  //   .get<any>(`${url}/users/${id}`)
  //   .pipe<IResponseUser>(
  //     map(({ user, success }) => ({ user, report: { success, status: 200 } }))
  //   )
  //   .pipe<IResponseUser>(
  //     catchError(err => {
  //       const {
  //         error: { success, user, message, fails },
  //         status
  //       } = err;
  //       return
  // ({
  //     user,
  //     report: { success, status, message, fails }
  //   }))
  // )
  // )
  //   })
  // );
  // }
}
