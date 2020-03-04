import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-register-block",
  templateUrl: "./register-block.component.html",
  styleUrls: ["./register-block.component.scss"]
})
export class RegisterBlockComponent implements OnInit {
  registerForm: FormGroup;

  constructor() {
    // Constructor
  }

  ngOnInit(): void {
    // Initiation form
    this.registerForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      position: new FormControl(),
      photo: new FormControl()
    });
    this.registerForm.valueChanges.subscribe(val => console.dir(val));
    this.registerForm.statusChanges.subscribe(val => console.dir(val));
  }
}
