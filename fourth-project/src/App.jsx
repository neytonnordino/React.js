import "./App.css";
import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./components/data";

function App() {
  // const { img, title, country, googleMapsLink, dates, text } = dataItem;
  const dataElement = data.map((dataItem) => {
    return (
      <Entry
        img={dataItem.img}
        // img={{
        //   src: dataItem.img.src
        // }}
        title={dataItem.title}
        country={dataItem.country}
        googleMapsLink={dataItem.googleMapsLink}
        dates={dataItem.dates}
        text={dataItem.text}
      />
    );
  });
  return (
    <>
      <Header />
      <main>{dataElement}</main>
    </>
  );
}

export default App;
