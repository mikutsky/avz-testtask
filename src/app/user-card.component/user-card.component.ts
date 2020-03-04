import { Component, OnInit, Input } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.scss"],
  animations: [
    trigger("showAnimation", [
      state("*", style({ "max-height": "0px", opacity: "0" })),
      state("show", style({ "max-height": "350px", opacity: "1" })),
      transition("* => show", animate(500))
    ])
  ]
})
export class UserCardComponent implements OnInit {
  // animation state
  stateAnimation: string;
  showAnimation = (): void => {
    this.stateAnimation = "show";
  };

  // getting an object with the specified values
  @Input() user: {
    photo?: string;
    name?: string;
    position?: string;
    email?: string;
    phone?: string;
  };

  // value of component fields
  name: string;
  position: string;
  photo: {
    src: string;
    alt: string;
    show: boolean;
  };
  contact: {
    email: string;
    phone: string;
    show: boolean;
    empty: string;
  };
  initialLetter: string;

  constructor() {}

  ngOnInit() {
    // serialization of the specified values
    this.name = this.user.name || "no name";
    this.position = this.user.position || "position not specified";
    this.photo = {
      src: this.user.photo || "",
      alt: this.user.name || "",
      show: this.user.photo ? true : false
    };
    this.contact = {
      email: this.user.email || "",
      phone: this.user.phone || "",
      show: Boolean(this.user.email || this.user.phone),
      empty: "user did not leave contacts"
    };
    this.initialLetter = this.user.name ? this.user.name[0] : "?";
  }

  // this method is called, if image is not found
  onImageError(): void {
    this.photo.show = false;
    this.showAnimation();
  }
}
