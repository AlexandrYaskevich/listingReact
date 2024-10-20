
import ListingPage from "./components/ListingPage";
import etsyJson from "./etsy.json";
import { EtsyDataItem } from "./components/ListingPage"


const App = () => {
  const etsyData = etsyJson as EtsyDataItem[];
  return (
    <>
      <ListingPage etsyData={etsyJson}/>
    </>
  );
};

export default App;