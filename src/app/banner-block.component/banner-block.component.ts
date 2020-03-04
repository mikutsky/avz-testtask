import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-banner-block",
  templateUrl: "./banner-block.component.html",
  styleUrls: ["./banner-block.component.scss"]
})
export class BannerBlockComponent implements OnInit {
  title = "Test assignment for Frontend Developer position";
  textSmall = `We kindly remind you that your test assignment
    should be submitted as a link to github/bitbucket repository.`;
  textMore = `Please be patient, we consider and respond to
    every application that meets minimum requirements. We look
    forward to your submission. Good luck! The photo has to scale in
    the banner area on the different screens`;
  actionTitle = "Sign up now";
  constructor() {}

  ngOnInit(): void {}
}
