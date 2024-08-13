import { HttpClient } from '@angular/common/http'
import { Observable, throwError, catchError, map } from 'rxjs';

import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';

export class DataService {

  constructor(private url: string, private http:  HttpClient) { 
  }

  getAll() {
    return this.http.get(this.url).pipe(
      map(response => response),
      catchError(this.handleError));
  }

  get(id) {
    return this.http.get(this.url + '/' + id).pipe(
      map(response => response),
      catchError(this.handleError));
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      map(response => response),
      catchError(this.handleError));
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({
      isRead: true })).pipe(
      map(response => response),
      catchError(this.handleError));
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id).pipe(
      map(response => response),
      catchError(this.handleError));
  }

  private handleError(error: Response) {
    if(error.status === 400)
      return throwError(new BadRequestError());
    else if(error.status === 404)
      return throwError(new NotFoundError());
    return throwError(new AppError(error));
  }
}
