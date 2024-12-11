export interface NavItem {
  name: string;
  to: string;
}

export interface NavigationProps {
  navItems: NavItem[];
}
