import {Component, OnInit} from '@angular/core';
import {IUser} from "../../interfaces";
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  userId: string;
  user: IUser | undefined;

  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.userId = this.route.snapshot.paramMap.get('id') as string
  }

  ngOnInit() {
    this.userService.getUserInfo(this.userId).subscribe(data => {
      this.user = data;
    });
  }
}
