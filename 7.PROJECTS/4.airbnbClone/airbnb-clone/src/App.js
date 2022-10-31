
import Header from "./components/Header.js";
import Cards from "./components/Cards.js";
import Menubar from "./components/Menubar.js";
import Data from "./data/data.json";
import Title from "./components/Title.js";
import  CardList from "./components/CardList.js";
import Footer from "./components/Footer.js";


function App() {
  return (
    <>
      <Header/>
      <Cards Card_data ={ Data.Card_Data}/>
      <Menubar/>
      <Title text="Plan a trip with help from local Hosts around the world"/>
      <CardList CardList_data={Data.Card_List1}/>
      <Title text="Top Sellers"/>
      <CardList CardList_data={Data.Card_List2}/>
      <Title text="New this week for you"/>
      <CardList CardList_data={Data.Card_List3}/>
      <Footer/>
    </>
  );
}

export default App;
