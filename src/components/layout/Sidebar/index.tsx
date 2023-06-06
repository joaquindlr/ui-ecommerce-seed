import Link from "next/link";
import style from "./SideBar.module.scss";

export default async function Sidebar() {
  return (
    <menu className={style.sidebar}>
      <ul className={style["sidebar__list"]}>
        <li>
          <Link className={style["sidebar__item"]} href="/products">
            Productos
          </Link>
        </li>
        <li className={style["sidebar__item"]}>Caja</li>
        <li className={style["sidebar__item"]}>Usuarios</li>
      </ul>
    </menu>
  );
}
