import { Component } from '@angular/core';
import { ExamsComponent } from '../../../features/exams/exams.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'main-layout',
  imports: [RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {}
