import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Site } from "../../types/site";

@Component({
  selector: "app-site-list",
  templateUrl: "./site-list.component.html",
  styleUrls: ["./site-list.component.css"]
})
export class SiteListComponent implements OnInit {
  @Input() public siteList: Site[];
  @Output() public siteSelected = new EventEmitter<Site>();

  constructor() {}

  ngOnInit() {}

  setSelectedSite(site: Site) {
    this.siteSelected.emit(site);
  }
}
