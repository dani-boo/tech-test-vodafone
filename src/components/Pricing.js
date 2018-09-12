import React from "react";
import PropTypes from "prop-types";

const Pricing = ({ priceInfo }) => (
  <div className="pricing-options">
    <div className="pricing-option upfront-cost">
      from <span>£{priceInfo.hardwarePrice.oneOffPrice.gross}</span> upfront cost{" "}
    </div>
    <div className="pricing-option monthly-cost">
      {" "}
      When you pay <span>£{priceInfo.bundlePrice.monthlyPrice.gross}</span> a<br /> month
    </div>
  </div>
);

export const priceInfoShape = PropTypes.shape({
  bundlePrice: PropTypes.shape({
    bundleId: PropTypes.string.isRequired,
    monthlyPrice: PropTypes.shape({
      gross: PropTypes.string.isRequired,
      net: PropTypes.string.isRequired,
      vat: PropTypes.string.isRequired,
    }),
    monthlyDiscountPrice: PropTypes.shape({
      gross: PropTypes.string,
      net: PropTypes.string,
      vat: PropTypes.string,
    }),
  }),
  hardwarePrice: PropTypes.shape({
    hardwareId: PropTypes.string.isRequired,
    oneOffPrice: PropTypes.shape({
      gross: PropTypes.string.isRequired,
      net: PropTypes.string.isRequired,
      vat: PropTypes.string.isRequired,
    }),
    oneOffDiscountPrice: PropTypes.shape({
      gross: PropTypes.string,
      net: PropTypes.string,
      vat: PropTypes.string,
    }),
  }),
});

Pricing.propTypes = {
  priceInfo: priceInfoShape,
};

export default Pricing;
