import React, { Component } from "react";

const currentUpfrontCost = "£1149";
const currentMonthlyCost = "£43.20 ";

class Pricing extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <tbody className="pricing-options">
            <tr className="table-top" />
            <tr>
              <td className="vertical-line">
                from <span className="upfront-cost">{currentUpfrontCost}</span> upfront cost{" "}
              </td>
              <td>
                {" "}
                When you pay <span className="monthly-cost">{currentMonthlyCost}</span> a<br />{" "}
                month
              </td>
            </tr>
            <tr className="table-bottom" />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Pricing;
