import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-acquaintance-block",
  templateUrl: "./acquaintance-block.component.html",
  styleUrls: ["./acquaintance-block.component.scss"]
})
export class AcquaintanceBlockComponent implements OnInit {
  title = "Let's get acquainted";
  subtitle = "I am cool frontend developer";
  paragraphs = [
    `We will evaluate how clean your approach to writing CSS and
    Javascript code is. You can use any CSS and Javascript 3rd party
    libraries without any restriction.`,
    `If 3rd party css/javascript libraries are added to the project
    via bower/npm/yarn you will get bonus points. If you use any task
    runner (gulp/webpack) you will get bonus points as well. Slice
    service directory page P​SD mockup​ into HTML5/CSS3.`
  ];
  actionTitle = "Sign up now";
  constructor() {}

  ngOnInit(): void {}
}
