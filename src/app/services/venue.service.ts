import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {IVenue} from "../interfaces/venue/IVenue";
import {BaseListingDto} from "../dto/baseListingDto";

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  constructor(private http: HttpClient) {
  }

  getVenues(pageId = 1, perPage = 20): Observable<BaseListingDto<IVenue>> {
    let params = new HttpParams();

    if (pageId > 1) {
      params = params.append('PageId', pageId);
    }

    if(perPage !=  20) {
      params = params.append('PerPage', perPage)
    }

    return this.http.get<BaseListingDto<IVenue>>(environment.apiUrl + 'api/Venues', {
      params
    })
  }
}
