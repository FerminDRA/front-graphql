import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants';
import { useTranslation } from "react-i18next";
import LanguageSelect from "./LanguajeSelect";
import MenuDropdown from "./openiaServices"


const Header = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const authToken = localStorage.getItem(AUTH_TOKEN);
  
  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <Link to="/" className="no-underline black">
          <div className="fw7 mr1">{t("Stars")}</div>
        </Link>
        <Link to="/" className="ml1 no-underline black">
          {t("List stars")}
        </Link>
        <div className="ml1">|</div>
        <Link
          to="/create"
          className="ml1 no-underline black"
        >
          {t("Add")}
        </Link>
        <div className="ml1">|</div>
        <Link to="/perfil" className="ml1 no-underline black">
          {t("Profile")}
        </Link>
        <div className="ml1">|</div>
        <Link to="/search" className="ml1 no-underline black" >
          {t("Search")}
        </Link>
        <div className="ml1">|</div>
        <Link>
          <MenuDropdown/>
        </Link>
        {authToken && (
          <div className="flex">
            <div className="ml1">|</div>
            <Link to="/login" className="ml1 no-underline black" >
              submit
            </Link>
          </div>
        )}

        <div className="ml1">|</div>
        <div className="flex flex-fixed">
          <div className="ml1 pointer black">
            {t('select_language')}
          </div>
          <div className="ml1 pointer black"> : </div>
          <div>
            <LanguageSelect className="ml1 pointer black" />
          </div>
        </div>

      </div>
      <div className="flex flex-fixed">
        {authToken ? (
          <div
            className="ml1 pointer black"
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN);
              navigate(`/`);
            }}
          >
            Logout
          </div>
        ) : (
          <Link
            to="/login"
            className="ml1 no-underline black"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;