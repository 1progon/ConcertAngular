import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {headerDefault} from "../../config";
import {Observable} from "rxjs";
import {PerformersListingDto} from "../dto/PerformersListingDto";

@Injectable({
  providedIn: 'root'
})
export class PerformerService {

  constructor(private http: HttpClient) {
  }

  getPerformers(pageId = 1, perPage = 20): Observable<PerformersListingDto> {
    let params = new HttpParams();

    if (pageId > 1) {
      params = params.append('PageId', pageId);
    }

    if (perPage != 20) {
      params = params.append('PerPage', perPage)
    }

    return this.http
      .get<PerformersListingDto>(environment.apiUrl + 'api/Performers', {
        headers: {...headerDefault.headers},
        params
      })
  }
}
