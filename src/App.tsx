
import ListingPage from "./components/ListingPage";
import etsyJson from "./etsy.json";


const App = () => {
  return (
    <>
      <ListingPage etsyData={etsyJson}/>
    </>
  );
};

export default App;