import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { ApiService } from "./api.service/api.service";

import { AppComponent } from "./app.component";
import { BannerBlockComponent } from "./banner-block.component/banner-block.component";
import { AcquaintanceBlockComponent } from "./acquaintance-block.component/acquaintance-block.component";
import { UserBlockComponent } from "./users-block.component/users-block.component";
import { UserCardComponent } from "./user-card.component/user-card.component";
import { RegisterBlockComponent } from "./register-block.component/register-block.component";

@NgModule({
  declarations: [
    AppComponent,
    BannerBlockComponent,
    AcquaintanceBlockComponent,
    UserBlockComponent,
    RegisterBlockComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
