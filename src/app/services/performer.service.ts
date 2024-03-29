import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {IPerformer} from "../interfaces/performer/IPerformer";
import {BaseListingDto} from "../dto/baseListingDto";

@Injectable({
  providedIn: 'root'
})
export class PerformerService {

  constructor(private http: HttpClient) {
  }

  getPerformers(pageId = 1, perPage = 20): Observable<BaseListingDto<IPerformer>> {
    let params = new HttpParams();

    if (pageId > 1) {
      params = params.append('PageId', pageId);
    }

    if (perPage != 20) {
      params = params.append('PerPage', perPage)
    }

    return this.http
      .get<BaseListingDto<IPerformer>>(environment.apiUrl + 'api/Performers', {
        params
      })
  }
}
