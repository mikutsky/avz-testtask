import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/api.service/api.service";

@Component({
  selector: "app-users-block",
  templateUrl: "./users-block.component.html",
  styleUrls: ["./users-block.component.scss"]
})
export class UserBlockComponent implements OnInit {
  // create a list of users, with the service method,
  // to less import, and more modularity
  userList = this.apiService.createUserList();

  // value of component fields
  title = "Our cheerful users";
  subtitle = "Attention! Sorting users by registration date";
  empty = "The list is empty";
  moreButton = "Show more";
  showUserList = (): boolean => this.userList.length > 0;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // get the first page of users
    this.apiService.getUsers(6).subscribe(users => (this.userList = users));
  }

  onClickMore(): void {
    // get the next page of users
    this.apiService
      .getNextUsers()
      .subscribe(users => this.userList.push(...users));
  }
}
