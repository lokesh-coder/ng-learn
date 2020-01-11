import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProfileComponent } from "./components/profile.component";
import { DetailsComponent } from "./components/details.component";

@NgModule({
  declarations: [ProfileComponent, DetailsComponent],
  exports: [ProfileComponent],
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: DetailsComponent
      }
    ])
  ]
})
export class ProfileModule {}
