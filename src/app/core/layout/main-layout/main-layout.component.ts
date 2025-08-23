import { HeaderComponent } from '@shared/components/header/header.component';
import { MenuComponent } from '@shared/components/menu/menu.component';
import { RouterOutlet } from '@angular/router';
import { Component, HostListener, signal } from '@angular/core';


@Component({
  selector: 'interestelar-main-layout',
  imports: [RouterOutlet, MenuComponent, HeaderComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  isMobileMenuOpen = signal(false);

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const window = event.target as Window;
    if (window.innerWidth >= 991) {
      this.isMobileMenuOpen.set(false);
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKeydown(event: KeyboardEvent) {
    if (this.isMobileMenuOpen()) {
      this.closeMobileMenu();
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(open => !open);
    this.toggleBodyScroll();
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
    this.enableBodyScroll();
  }

  private toggleBodyScroll() {
    if (this.isMobileMenuOpen()) {
      this.disableBodyScroll();
    } else {
      this.enableBodyScroll();
    }
  }

  private disableBodyScroll() {
    document.body.style.overflow = 'hidden';
  }

  private enableBodyScroll() {
    document.body.style.overflow = '';
  }
}
