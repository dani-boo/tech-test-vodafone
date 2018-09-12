import React from "react";
import PropTypes from "prop-types";

const Pricing = ({ priceInfo }) => (
  <div>
    <table className="table">
      <tbody className="pricing-options">
        <tr className="table-top" />
        <tr>
          <td className="vertical-line">
            from <span className="upfront-cost">£{priceInfo.hardwarePrice.oneOffPrice.gross}</span>{" "}
            upfront cost{" "}
          </td>
          <td>
            {" "}
            When you pay{" "}
            <span className="monthly-cost">£{priceInfo.bundlePrice.monthlyPrice.gross}</span> a
            <br /> month
          </td>
        </tr>
        <tr className="table-bottom" />
      </tbody>
    </table>
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
