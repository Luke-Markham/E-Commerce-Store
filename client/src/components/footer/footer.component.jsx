import React from "react";
import { OptionsContainer, OptionsLink } from "../header/header.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { signOutStart } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import "./footer.styles.scss";

const Footer = ({ currentUser, signOutStart }) => {
  const backToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer-container">
      <p className="copyright-title">CROWN CLOTHING 2019&copy;</p>
      <OptionsContainer className="options options-footer">
        <OptionsLink to="/shop" onClick={backToTop}>
          SHOP
        </OptionsLink>
        <OptionsLink to="/contact">CONTACT</OptionsLink>
        {currentUser ? (
          <OptionsLink as="div" onClick={signOutStart}>
            SIGN OUT
          </OptionsLink>
        ) : (
          <OptionsLink to="/signin">SIGN IN</OptionsLink>
        )}
      </OptionsContainer>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
