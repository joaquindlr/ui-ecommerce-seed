import style from "./SideBar.module.scss";

const Sidebar = () => {
  return (
    <menu className={style.sidebar}>
      <ul className={style["sidebar-list"]}>
        <li className={style["sidebar-item"]}>Productos</li>
        <li className={style["sidebar-item"]}>Caja</li>
        <li className={style["sidebar-item"]}>Usuarios</li>
      </ul>
    </menu>
  );
};

export default Sidebar;
