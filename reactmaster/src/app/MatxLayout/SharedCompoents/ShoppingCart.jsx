import React from "react";
import { Icon, Badge, IconButton, Drawer } from "@material-ui/core";
import { ThemeProvider, withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getCartList,
  deleteProductFromCart,
  updateCartAmount
} from "app/redux/actions/EcommerceActions";

let cartListLoaded = false;

function ShoppingCart(props) {
  const {
    container,
    theme,
    settings,
    cartList = [],
    getCartList,
    deleteProductFromCart,
    updateCartAmount,
    user
  } = props;

  const [panelOpen, setPanelOpen] = React.useState(false);

  if (!cartListLoaded) {
    getCartList(user.userId);
    cartListLoaded = true;
  }

  function handleDrawerToggle() {
    setPanelOpen(!panelOpen);
  }

  const parentThemePalette = theme.palette;

  return (
    <ThemeProvider theme={settings.themes[settings.activeTheme]}>
    </ThemeProvider>
  );
}

ShoppingCart.propTypes = {
  settings: PropTypes.object.isRequired,
  cartList: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  settings: state.layout.settings,
  getCartList: PropTypes.func.isRequired,
  deleteProductFromCart: PropTypes.func.isRequired,
  updateCartAmount: PropTypes.func.isRequired,
  cartList: state.ecommerce.cartList,
  user: state.user
});

export default withStyles(
  {},
  { withTheme: true }
)(
  connect(mapStateToProps, {
    getCartList,
    deleteProductFromCart,
    updateCartAmount
  })(ShoppingCart)
);
