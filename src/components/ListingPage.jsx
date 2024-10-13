import React from "react";
import "/src/css/main.css";
import Item_details from "./Item_detalis";
import Item_image from "./Item_image";

const ListingPage = ({ etsyData }) => {
  return (
    <div className="item-list">
      {etsyData.map(
        ({
          listing_id,
          url,
          MainImage,
          title,
          currency_code,
          price,
          quantity,
        }) => (
          <div className="item" key={listing_id}>
            <Item_image url={url} MainImage={MainImage} />
            <Item_details
              title={title}
              currency_code={currency_code}
              price={price}
              quantity={quantity}
            />
          </div>
        )
      )}
    </div>
  );
};

export default ListingPage;