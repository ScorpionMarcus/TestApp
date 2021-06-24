import { Injectable } from '@angular/core';
import {Slayer} from './slayer';
import {SLAYERS} from './mock-slayers';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SlayerService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private slayersUrl = 'api/slayers';  // URL to web api

  /** GET slayers from the server */
  getSlayers(): Observable<Slayer[]> {
    this.messageService.add('SlayerService: fetched slayers');
    return this.http.get<Slayer[]>(this.slayersUrl)
      .pipe(
        tap(_ => this.log('fetched slayers')),
        catchError(this.handleError<Slayer[]>('getSlayers', []))
      );
  }

  /** GET slayer by id. Will 404 if id not found */
  getSlayer(id: number): Observable<Slayer> {
    const url = `${this.slayersUrl}/${id}`;
    return this.http.get<Slayer>(url).pipe(
      tap(_ => this.log(`fetched slayer id=${id}`)),
      catchError(this.handleError<Slayer>(`getSlayer id=${id}`))
    );
  }

  /** PUT: update the slayer on the server */
  updateSlayer(slayer: Slayer): Observable<any> {
    return this.http.put(this.slayersUrl, slayer, this.httpOptions).pipe(
      tap(_ => this.log(`updated slayer id=${slayer.id}`)),
      catchError(this.handleError<any>('updateSlayer'))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /** POST: add a new slayer to the server */
  addSlayer(slayer: Slayer): Observable<Slayer> {
    return this.http.post<Slayer>(this.slayersUrl, slayer, this.httpOptions).pipe(
      tap((newSlayer: Slayer) => this.log(`added slayer w/ id=${newSlayer.id}`)),
      catchError(this.handleError<Slayer>('addSlayer'))
    );
  }

  /** DELETE: delete the slayer from the server */
  deleteSlayer(id: number): Observable<Slayer> {
    const url = `${this.slayersUrl}/${id}`;

    return this.http.delete<Slayer>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted slayer id=${id}`)),
      catchError(this.handleError<Slayer>('deleteSlayer'))
    );
  }

  /* GET slayers whose name contains search term */
  searchSlayers(term: string): Observable<Slayer[]> {
    if (!term.trim()) {
      // if not search term, return empty slayer array.
      return of([]);
    }
    return this.http.get<Slayer[]>(`${this.slayersUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found slayers matching "${term}"`) :
        this.log(`no slayers matching "${term}"`)),
      catchError(this.handleError<Slayer[]>('searchSlayers', []))
    );
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
