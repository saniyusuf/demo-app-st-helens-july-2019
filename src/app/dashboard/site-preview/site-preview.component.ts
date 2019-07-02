import { Component, Input, OnInit } from "@angular/core";
import { Site } from "../../types/site";

@Component({
  selector: "app-site-preview",
  templateUrl: "./site-preview.component.html",
  styleUrls: ["./site-preview.component.css"]
})
export class SitePreviewComponent implements OnInit {
  @Input() public siteToShow: Site;

  constructor() {}

  ngOnInit() {}
}
