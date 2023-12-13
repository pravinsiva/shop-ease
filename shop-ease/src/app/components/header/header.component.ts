import { CommonModule } from '@angular/common';
import { Component, afterNextRender } from '@angular/core';
import { AppRoutingModule } from '../../app.routes';
import { shopEaseConstants } from '../../constants/se-constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AppRoutingModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  headerConstant = shopEaseConstants
  constructor() {
    // Register a callback to be invoked the next time the application finishes rendering.
    afterNextRender(() => {
      this.onResize();
      // Switch between responsive layouts on resize
      window.onresize = () => {
        this.onResize();
      };
    })

  }

  // Switch between responsive layouts on resize
  private onResize() {
    this.toggleNavItems();
  }

// For toggling Mobile screen hamburger menu and show/hide navigation menu items
  openMenu() {
    const navIcon: any = document?.getElementById("hamIcon");
    navIcon.classList.toggle("change");
    const navItems: any = document?.getElementById("navItems");
    if (navIcon?.classList?.contains('change')) {
      navItems.style.display = "flex";
    } else {
      navItems.style.display = 'none';
    }
  }
  // show/hide navigation menu items based on screen size
  private toggleNavItems() {
    const navItems: any = document?.getElementById("navItems");
    if (window.innerWidth <= 600) {
      navItems.style.display = "none";
    } else {
      navItems.style.display = 'flex';
    }
  }
}
