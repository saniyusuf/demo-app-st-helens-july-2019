import { Component, OnInit } from "@angular/core";
import { Site } from "../../types/site";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  public siteListData;
  public newSelectedSite: Site;

  constructor(httpClient: HttpClient) {
    httpClient
      .get<Site[]>("https://api.myjson.com/bins/4kwpm")
      .subscribe(dataFromServer => (this.siteListData = dataFromServer));
  }

  ngOnInit() {}

  onNewSiteSelected(newSite: Site) {
    this.newSelectedSite = newSite;
  }
}
