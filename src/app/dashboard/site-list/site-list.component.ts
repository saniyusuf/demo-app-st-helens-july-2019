import { Component, Input, OnInit } from "@angular/core";
import { Site } from "../../types/site";

@Component({
  selector: "app-site-list",
  templateUrl: "./site-list.component.html",
  styleUrls: ["./site-list.component.css"]
})
export class SiteListComponent implements OnInit {
  @Input() public siteList: Site[];
  constructor() {}

  ngOnInit() {}
}
