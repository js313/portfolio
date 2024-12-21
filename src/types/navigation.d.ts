export interface NavItem {
  name: string;
  to: string;
  customHandler?: (to: string) => void;
}

export interface NavigationProps {
  navItems: NavItem[];
}
