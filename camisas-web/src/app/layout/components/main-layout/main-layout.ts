import {
  Component,
  HostListener,
  signal
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import {AuthService} from '../../../core/auth/auth.service';

interface NavItem {
  label: string;
  path: string;
  icon: string;
}

interface UserMenuItem {
  label: string;
  icon: string;
  route?: string;
  danger?: boolean;
  dividerAbove?: boolean;
  action?: () => void;
}

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-layout.html'
})
export class MainLayoutComponent {
  sidebarOpen = signal(false);
  userMenuOpen = signal(false);

  navItems = signal<NavItem[]>([
    {label: 'Dashboard', path: '/dashboard', icon: 'M3 12l2-2 4 4L21 4l2 2L9 20 3 14z'},
    {
      label: 'Camisa',
      path: '/camisa',
      icon: 'M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-5.33 0-8 2.67-8 6v2h16v-2c0-3.33-2.67-6-8-6Z'
    }
  ]);

  userMenuItems: UserMenuItem[] = [
    {
      label: 'Ver Perfil',
      icon: 'M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-5.33 0-8 2.67-8 6v2h16v-2c0-3.33-2.67-6-8-6Z',
      route: '/profile'
    },
    {label: 'Configuración', icon: 'M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4Z', route: '/settings', dividerAbove: true},
    {
      label: 'Cerrar Sesión',
      icon: 'M16 13H7v-2h9V8l5 4-5 4v-3Z',
      danger: true,
      dividerAbove: true,
      action: () => this.logout()
    }
  ];

  constructor(
    readonly router: Router,
    readonly authService: AuthService,
  ) {
  }

  toggleSidebar() {
    this.sidebarOpen.update(v => !v);
  }

  closeSidebar() {
    this.sidebarOpen.set(false);
  }

  toggleUserMenu() {
    this.userMenuOpen.update(v => !v);
  }

  closeUserMenu() {
    this.userMenuOpen.set(false);
  }

  handleMenuItem(item: UserMenuItem) {
    if (item.action) {
      item.action();
    }
    this.closeUserMenu();
  }

  logout() {
    const success = this.authService.signOut();
    if (success) {
      console.log('Sesión cerrada exitosamente');
      this.router.navigate(['/auth/login']);
    } else {
      console.error('Error al cerrar sesión');
    }
  }

  @HostListener('document:click', ['$event'])
  onDocClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
      this.closeUserMenu();
    }
  }

}
