import { Component } from '@angular/core';
import { EnterExitBottom } from 'src/app/general-module/components/util/animation-utils';
import { environment } from 'src/environments/environment';
import { User } from '../../../general-module/components/interfaces/user.interface';
import { BlockUiService } from '../../../general-module/components/servicios/block-ui.service';
import { UserService } from '../../../general-module/components/servicios/user.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  animations: [
    EnterExitBottom
  ],
})
export class RolesComponent {

  user!: User;
  date!: Date;
  found: boolean = false;
  searched: boolean = false;

  constructor(
    private userService: UserService,
    private blockUI: BlockUiService
  ) {
    this.setTime();
  }

  setTime() {
    this.date = new Date();
    setTimeout(() => {
      this.setTime();
    }, (60 - this.date.getSeconds()) * 1000)
  }

  findInfo(id: string) {
    this.blockUI.block();
    this.searched = false;
    this.found = false;
    this.userService.getUserInfo(id).toPromise().then(data => {
      if (data) {
        this.found = true;
      }
      this.user = data;
      this.searched = true;
      setTimeout(() => this.blockUI.unblock(), 10);
    }).catch(err => {
      this.blockUI.unblock();
      throw err;
    });
  }

  validateEnter(event: KeyboardEvent, id: string) {
    if (event.key == 'Enter') {
      this.findInfo(id);
    }
  }

  getImageUrl() {
    return `${environment.API_IFI_SIPF}/users/image/${this.user.nit}`;
  }
}
