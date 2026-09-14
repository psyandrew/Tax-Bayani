import './Shortcuts.css';
import { useNavigate } from 'react-router-dom';



function ConsultShortcut(){
  
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/contact#logo'); // Make sure this matches your Route path
  };

        {/* This hidden image forces the browser to preload the hover asset */}
  return (

      <>
        <img src="../Assets/contact-us-hover.png" alt="" style={{ display: 'none' }} />
        <div className="consult-shortcut" onClick={handleNavigation}>

        </div>
      </>
  )
}

export default ConsultShortcut;


