import "/src/css/main.css";
import cn from "classnames";
import React from "react";

interface ItemDetailsProps {
  title: string;
  currency_code: string;
  price: number | string;  
  quantity: number;
}

const ItemDetails: React.FC<ItemDetailsProps> = ({ title, currency_code, price, quantity }) => {
  const levelLow = 10;
  const levelHigh = 20;

  const preparedTitle = title.length > 50 ? `${title.slice(0, 50)}...` : title;

  return (
    <div className="item-details">
      <p className="item-title">{preparedTitle}</p>
      <p className="item-price">
        {price}
        {currency_code}
      </p>
      <p className={cn("item-quantity", {
          "level-low": quantity <= levelLow,
          "level-medium": quantity <= levelHigh && quantity > levelLow,
          "level-high": quantity > levelHigh,
        })}
      >
        {quantity}
      </p>
    </div>
  );
};

export default ItemDetails;
