import "./App.css";
import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./components/data";

function App() {
  const dataElement = data.map((dataItem) => {
    return (
      <Entry
      key={dataItem.id}
      {...dataItem}
        // img={dataItem.img}
        // // img={{
        // //   src: dataItem.img.src
        // // }}
        // title={dataItem.title}
        // country={dataItem.country}
        // googleMapsLink={dataItem.googleMapsLink}
        // dates={dataItem.dates}
        // text={dataItem.text}
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
