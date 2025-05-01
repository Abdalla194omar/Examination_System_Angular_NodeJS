import { Component } from '@angular/core';
import { RouterLink,Router } from '@angular/router';
import {MainLayoutComponent}  from '../../../../layout/main-layout/main-layout/main-layout.component'
@Component({
  selector: 'app-header',
  imports: [RouterLink,MainLayoutComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateToAddExam(event: Event) {
    event.preventDefault(); // Prevent any default Bootstrap behavior
    this.router.navigate(['/add-exam']);
  }
}
