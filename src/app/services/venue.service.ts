import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {headerDefault} from "../../config";
import {Observable} from "rxjs";
import {VenuesListingDto} from "../dto/VenuesListingDto";

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  constructor(private http: HttpClient) {
  }

  getVenues(pageId = 1, perPage = 20): Observable<VenuesListingDto> {
    let params = new HttpParams();

    if (pageId > 1) {
      params = params.append('PageId', pageId);
    }

    if(perPage !=  20) {
      params = params.append('PerPage', perPage)
    }

    return this.http.get<VenuesListingDto>(environment.apiUrl + 'api/Venues', {
      headers: {...headerDefault.headers},
      params
    })
  }
}
