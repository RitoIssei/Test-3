import { Component } from '@angular/core';
import { NewPostComponent } from './new-post/new-post.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent {
  isNavbarCollapsed = true;
  constructor(private modalRef: BsModalRef, private modalService: BsModalService) { }

  openModal() {
    this.modalRef = this.modalService.show(NewPostComponent);
  }

  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
