import style from "./SideBar.module.scss";

export default async function Sidebar() {
  return (
    <menu className={style.sidebar}>
      <ul className={style["sidebar__list"]}>
        <li className={style["sidebar__item"]}>Productos</li>
        <li className={style["sidebar__item"]}>Caja</li>
        <li className={style["sidebar__item"]}>Usuarios</li>
      </ul>
    </menu>
  );
}
