import { Fragment, useRef } from "react";
import './Header.scss';
import { useNavigate } from "react-router-dom";


//the component is here for not making the screen blank.
const Header = (props) => {
  const navigate = useNavigate();

  const navRef = useRef();


  const goToLeadForm = () => {
      navigate('/leadform');
  }

  return (
    <Fragment>
        <div className='header'>
           <nav ref={navRef}>
                {/* <div className='nav-ref lead-open'>
                    <div onClick={goToLeadForm}>
                      Houses Data
                    </div>
                </div> */}
            </nav>
        </div>
    </Fragment>
  );
}

export default Header;