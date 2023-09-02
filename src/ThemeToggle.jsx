import { GlobalContext } from "./Context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { darkTheme, toggle } = GlobalContext();
  const DarkTheme = darkTheme; 
  return (
    <section className="toggle-container">
      
      <button className="dark-toggle" onClick={toggle}>
        {DarkTheme ? (
          <BsFillSunFill className="toggle-icon" />
        ) : (
          <BsFillMoonFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;

// const ThemeToggle = () => {
//     return <h1>Hi</h1>
// }
// export default ThemeToggle;
