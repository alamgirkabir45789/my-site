import themeConfig from '@configs/themeConfig';
import React from 'react';
import { NavLink } from 'reactstrap';

const ERPLogo = () => {
  return (
    <li className="nav-item">
      <NavLink to="/" className="navbar-brand d-flex align-items-center">
        <span className="brand-logo">
          <img src={themeConfig.app.appLogoImage} width={35} alt="logo" />
        </span>
        <h2 className="brand-text mb-0 d-xl-none">{themeConfig.app.appName}</h2>
      </NavLink>
    </li>
  );
};

export default ERPLogo;
