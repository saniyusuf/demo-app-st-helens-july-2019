import { Component, OnInit } from "@angular/core";
import { Site } from "../../types/site";
import { SitesDataService } from "../../sites-data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  public siteListData: Observable<Site[]>;
  public newSelectedSite: Site;

  constructor(siteDataService: SitesDataService) {
    this.siteListData = siteDataService.loadSites();
  }

  ngOnInit() {}

  onNewSiteSelected(newSite: Site) {
    this.newSelectedSite = newSite;
  }
}
