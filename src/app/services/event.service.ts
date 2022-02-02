import {Injectable} from '@angular/core';
import {map} from "rxjs/operators";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from 'src/environments/environment';
import {IEvent} from '../interfaces/event/IEvent';
import {headerDefault} from 'src/config';
import {Observable} from "rxjs";
import {EventsListingDto} from "../dto/eventsListingDto";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {
  }

  getEvents(pageId = 1, perPage = 20): Observable<EventsListingDto> {
    let params = new HttpParams();

    if (pageId > 1) {
      params = params.append('PageId', pageId);
    }

    if (perPage != 20) {
      params = params.append('PerPage', perPage);
    }

    return this.http.get<EventsListingDto>(environment.apiUrl + 'api/Events', {
      headers: {...headerDefault.headers},
      params
    })
      .pipe(map(events => {
        events.items.map(event => {
          event.date = new Date(event.date);
          return event;
        })
        return events;
      }))
  }
}
