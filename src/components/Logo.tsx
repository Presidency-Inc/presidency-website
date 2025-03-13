
import { Link } from "react-router-dom";

interface LogoProps {
  onClick?: () => void;
}

const Logo = ({ onClick }: LogoProps = {}) => {
  return (
    <Link to="/" onClick={onClick}>
      <img 
        src="/lovable-uploads/ffafa331-26f9-4d3d-9119-a479ba119377.png" 
        alt="Presidency Logo" 
        width="40" 
        height="40" 
        className="object-contain"
      />
    </Link>
  );
};

export default Logo;
