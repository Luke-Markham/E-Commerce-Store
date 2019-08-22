import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectCartItems } from "../../redux/cart/cart-selectors";

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});
const CartDropdownContainer = compose(connect(mapStateToProps));

export default CartDropdownContainer;
