
import './main.css'
import ItemDetails  from "./Item_detalis";
import ItemImage from "./Item_image";


interface EtsyDataItem {
listing_id: number; 
url: string;
MainImage?: {
  url_570xN: string;
};
title: string;
currency_code: string;
price: number | string; 
quantity: number;
}

interface ListingPageProps {
  etsyData: EtsyDataItem[];
}

const ListingPage: React.FC<ListingPageProps> = ({ etsyData }) => {

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
            <ItemImage url={url} MainImage={MainImage} />
            <ItemDetails
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
