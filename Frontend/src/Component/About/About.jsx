import { NavLink } from "react-router-dom";

export const About = () => {
   return (
      <>
         <p>Welcome to the About </p>
         <NavLink to={'/home'}>
            <button>Home</button>
         </NavLink>
      </>
   );
};
