import { Link } from "react-router";

type NavItemProps = {
  to: string;
  label: string;
  onClick?: () => void;
};
export function NavItem({ to, label, onClick }: NavItemProps) {
  return (
    <li className="nav-item" onClick={onClick}>
      <Link to={to}>{label}</Link>
    </li>
  );
}
