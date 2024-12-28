export interface NavItem {
  name: string;
  to: string;
  customHandler?: (to: string) => void;
  openInNewTab?: boolean;
}

export interface NavigationProps {
  navItems: NavItem[];
}
