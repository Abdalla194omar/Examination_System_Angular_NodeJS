import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { RouterLink } from '@angular/router';
=======

>>>>>>> 0a7a7322cda4d7659743b828b581daeebe7abcfc
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule,RouterLink]
=======
  imports: [CommonModule]
>>>>>>> 0a7a7322cda4d7659743b828b581daeebe7abcfc
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 0a7a7322cda4d7659743b828b581daeebe7abcfc
