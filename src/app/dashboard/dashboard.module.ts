import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SiteListComponent } from "./site-list/site-list.component";
import { SitePreviewComponent } from "./site-preview/site-preview.component";
import {RouterModule, Routes} from '@angular/router';

const childRoutes: Routes = [
  {
    path: "",
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [DashboardComponent, SiteListComponent, SitePreviewComponent],
  imports: [CommonModule, RouterModule.forChild(childRoutes)]
})
export class DashboardModule {}
