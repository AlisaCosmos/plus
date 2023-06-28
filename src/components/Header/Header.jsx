import "./Header.scss";
import * as cx from "classnames";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState, useEffect, useRef } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { ReactComponent as Logo } from "../../assets/imgs/logo.svg";
import { ReactComponent as CalculatorIcon } from "../../assets/imgs/calc_icon.svg";
import { ReactComponent as Burger } from "../../assets/imgs/burger_icon_tablet.svg";
import { ReactComponent as Close } from "../../assets/imgs/close_icon.svg";
import ButtonRequest from "../ButtonRequest/ButtonRequest";
// import { RemoveScroll } from "react-remove-scroll";

function Header({
  opened,
  closeBurger,
  openBurger,
  handleCalculatorModal,
  handleRequestModal,
}) {
  const logoReference = useRef(null);
  const [focus, setFocus] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (focus === true) {
      logoReference.current.focus();
      setFocus(false);
    }
  }, [focus]);

  const handleFocus = () => {
    setFocus(true);
  };

  const classNav = cx("header__nav", {
    "header__nav header__nav_active": opened,
  });

  const classOverlay = cx("header__overlay", {
    "header__overlay_active": opened,
  });

  const classCalcIcon = cx("header__calcIcon", {
    "header__calcIcon_focus": focus,
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    document.body.style = "";
  }

  const handleRequestModalFromNav = () => {
    if (opened === false) {
      handleRequestModal();
    } else {
      closeBurger();
      setTimeout(() => {
        handleRequestModal();
      }, 10)
    }
  }

  const handleNav = () => {
    if (opened === false) {
      handleFocus();
    } else {
      closeBurger();
      handleFocus();
    }
  }

  return (
    <header className="header container">
      <div className="header__inner container__row">
        <Link to="/" className="header__logo" ref={logoReference} onClick={scrollToTop}>
          <Logo className="header__logoIcon" />
        </Link>
        <div className={classOverlay}></div>
        <nav className={classNav} onClick={closeBurger}>
          <div
            className="header__navInner"
            onClick={(e) => e.stopPropagation()}>
            {opened && (
              <button className="header__close" onClick={closeBurger}>
                <Close className="header__closeIcon" />
              </button>
            )}
            <div className="header__linksAndButtons">
              <div className="header__links">
                <HashLink smooth to="/#factoring" className="header__link" onClick={handleNav}>
                  Факторинг
                </HashLink>
                <HashLink smooth to="/#scheme" className="header__link" onClick={handleNav}>
                  Схема факторинга
                </HashLink>
                <Link to="/cases" className="header__link" onClick={handleNav}>
                  Кейсы
                </Link>
                <Link to="/for-marketplaces" className="header__link" onClick={handleNav}>
                  Маркетплейсам
                </Link>
                <HashLink smooth to="/#contact-info" className="header__link" onClick={handleNav}>
                  Контакты
                </HashLink>
              </div>
              <div className="header__buttons">
                <ButtonRequest
                  size="small"
                  handleRequestModal={handleRequestModalFromNav}
                />
                {/* <button
                  className="header__calc"
                  onClick={() => { handleCalculatorModal(); handleFocus(); closeBurger(); }}
                  onFocus={() => setFocusIcon((focusIcon) => !focusIcon)}
                  onBlur={() => setFocusIcon((focusIcon) => !focusIcon)}>
                  {(opened && (width < 960)) ? (
                    <span className="header__calcText">Калькулятор</span>
                  ) : (
                    <CalculatorIcon className={classCalcIcon} />
                  )}
                </button> */}
              </div>
            </div>
          </div>
        </nav>
        <button className="header__burger" onClick={openBurger}>
          <Burger className="header__burgerIcon" />
        </button>
      </div>
    </header>
  );
}

export default Header;
