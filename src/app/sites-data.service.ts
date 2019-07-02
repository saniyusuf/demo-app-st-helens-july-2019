import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Site } from "./types/site";

@Injectable({
  providedIn: "root"
})
export class SitesDataService {
  constructor(private _httpClient: HttpClient) {}

  loadSites(): Observable<Site[]> {
    return this._httpClient.get<Site[]>("https://api.myjson.com/bins/4kwpm");
  }
}
