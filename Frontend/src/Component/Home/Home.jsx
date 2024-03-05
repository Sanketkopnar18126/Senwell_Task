import { NavLink } from "react-router-dom";

export const Home = () => {
   return (
      <>
         <p>Welcome to the Home </p>
         <NavLink to={"/about"}>
            <button>About</button>
         </NavLink>
      </>
   );
};
