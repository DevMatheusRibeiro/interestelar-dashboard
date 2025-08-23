import { HeaderComponent } from '@shared/components/header/header.component';
import { MenuComponent } from '@shared/components/menu/menu.component';
import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'interestelar-main-layout',
  imports: [RouterOutlet, MenuComponent, HeaderComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  protected readonly isMobileMenuOpen = signal(false);

  @HostListener('window:resize', ['$event'])
  protected onResize(event: Event) {
    const window = event.target as Window;
    if (window.innerWidth >= 991) {
      this.isMobileMenuOpen.set(false);
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  protected onEscapeKeydown(event: KeyboardEvent) {
    if (this.isMobileMenuOpen()) {
      this.closeMobileMenu();
    }
  }

  protected toggleMobileMenu() {
    this.isMobileMenuOpen.update(open => !open);
    this.toggleBodyScroll();
  }

  protected closeMobileMenu() {
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
