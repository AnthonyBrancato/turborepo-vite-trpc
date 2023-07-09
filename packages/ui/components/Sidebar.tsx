interface SidebarProps {
  menu: any[]; // to define
}

export function Sidebar({ menu }: SidebarProps): React.JSX.Element {
  return <div className="w-64 h-screen">sidebar</div>;
}
