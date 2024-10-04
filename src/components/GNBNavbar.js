import React from "react";
import { useNavigate, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

const GNBNavbar = ({ authenticate, setAuthenticate }) => {
  const menulist = [
    { title: "여성" },
    { title: "Divided" },
    { title: "남성" },
    { title: "신생아/유아" },
    { title: "아동" },
    { title: "H&M Home" },
    { title: "Sale" },
    { title: "지속가능성" },
  ];

  const navigate = useNavigate();

  function goToLogin() {
    if (authenticate) {
      setAuthenticate(false);
    } else {
      navigate("/login");
    }
  }

  const search = (event) => {
    if (event.key === "Enter") {
      // console.log('event.key', event.key)
      let keyword = event.target.value;
      console.log("keyword", keyword);
      navigate(`?q=${keyword}`);
    }
    // console.log('key press')
  };
  return (
    <div>
      <div className="login-button" onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} />
        {authenticate ? <p>로그아웃</p> : <p>로그인</p>}
      </div>
      <Link className="login-logo" to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png" />
      </Link>
      <div className="login-menu">
        <ul className="login-menulist">
          {menulist.map((menulist) => {
            return (
              <li>
                <button>{menulist.title}</button>
              </li>
            );
          })}
        </ul>
        <div className="login-search">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyPress={(event) => search(event)} />
        </div>
      </div>
    </div>
  );
};

export default GNBNavbar;
