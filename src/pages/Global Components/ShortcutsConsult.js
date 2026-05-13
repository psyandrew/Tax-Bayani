import './Shortcuts.css';
import { useNavigate } from 'react-router-dom';



function ConsultShortcut(){
  
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/contact#logo'); // Make sure this matches your Route path
  };


  return (
  <div className="consult-shortcut" onClick={handleNavigation}>

      </div>
  )
}

export default ConsultShortcut;


