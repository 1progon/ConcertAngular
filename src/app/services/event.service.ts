import {Injectable} from '@angular/core';
import {map} from "rxjs/operators";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from 'src/environments/environment';
import {IEvent} from '../interfaces/event/IEvent';
import {Observable} from "rxjs";
import {BaseListingDto} from "../dto/baseListingDto";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {
  }

  getEvents(pageId = 1, perPage = 20): Observable<BaseListingDto<IEvent>> {
    let params = new HttpParams();

    if (pageId > 1) {
      params = params.append('PageId', pageId);
    }

    if (perPage != 20) {
      params = params.append('PerPage', perPage);
    }


    return this.http.get<BaseListingDto<IEvent>>(environment.apiUrl + 'api/Events', {
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

  getEvent(slug: string): Observable<IEvent> {
    return this.http
      .get<IEvent>(environment.apiUrl + 'api/Events/' + slug);

  }
}
