import ListingPage from "./components/ListingPage";
import etsyData from "/src/data/etsy.json";

const App = () => {
  //console.log(etsyData);
  return (
    <>
      <ListingPage etsyData={etsyData} />
    </>
  );
};

export default App;