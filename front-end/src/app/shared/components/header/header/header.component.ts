import { Component } from '@angular/core';
import {MainLayoutComponent}  from '../../../../layout/main-layout/main-layout/main-layout.component'
@Component({
  selector: 'app-header',
  imports: [MainLayoutComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    img:string = '../../../../../../public/assests/images/logo.jpeg'
}
