import { NavLink } from "react-router-dom";

export const Navbar = () => {
   return (
      <>
         <NavLink to={"/home"}>
            <button>Home</button>
         </NavLink>

         <NavLink to={"/about"}>
            <button>About</button>
         </NavLink>
      </>
   );
};
