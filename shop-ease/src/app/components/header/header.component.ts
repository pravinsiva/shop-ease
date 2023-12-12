import { CommonModule } from '@angular/common';
import { Component, afterNextRender } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  {
  constructor() {
    afterNextRender(() => {
      this.onResize();
      window.onresize = () => {
        this.onResize();
    };
    })
   
  }
  private onResize() {
    this.toggleNavItems();
  }

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

  private toggleNavItems() {
    const navItems: any = document?.getElementById("navItems");
    if (window.innerWidth <= 600) {
      navItems.style.display = "none";
    } else {
      navItems.style.display = 'flex';
    }
  }
}
