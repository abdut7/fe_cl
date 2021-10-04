
import searchSolid from '../assets/resources/icons/top/search-solid.svg';
import userAltSolid from '../assets/resources/icons/top/user-alt-solid.svg';
import envelopeOpenTextSolid from '../assets/resources/icons/top/envelope-open-text-solid.svg';
import bellRegular1 from '../assets/resources/icons/top/bell-regular 1.svg';
import cogSolid from '../assets/resources/icons/cog-solid.svg'

function Header(){

    return(
      <div className="dashboard-top">
        <div className="inputholder">
          <img
            src={searchSolid}
            alt=""
            className="input-icn"
          />
          <input type="text" placeholder="Search" className="inputtext" />
        </div>
        <div className="dashboard-top-icnholder">
       <div className="icnholder">
          <img
            src={userAltSolid}
            alt=""
            className="icnholder-icn"
          />
        </div>
        <div className="icnholder">
          <img
            src={envelopeOpenTextSolid}
            alt=""
            className="icnholder-icn"
          />
        </div>
        <div className="icnholder">
          <img
            src={bellRegular1}
            alt=""
            className="icnholder-icn"
          />
        </div>
        <div className="icnholder">
          <img
            src={cogSolid}
            alt=""
            className="icnholder-icn"
          />
        </div>
      </div>
    </div>
  )
}

export default Header;