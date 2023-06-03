import style from "./SideBar.module.scss";

export default async function Sidebar() {
  return (
    <menu className={style.sidebar}>
      <ul className={style["sidebar-list"]}>
        <li className={style["sidebar-item"]}>Productos</li>
        <li className={style["sidebar-item"]}>Caja</li>
        <li className={style["sidebar-item"]}>Usuarios</li>
      </ul>
    </menu>
  );
}
