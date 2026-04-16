import CharityList from "./components/CharityList";
import Header from "./components/Header";
import Plans from "./components/Plans";
import Registration from "./components/Registration";

const Home = function () {
  return (
    <div>
      <Header />
      <main>
        <CharityList />
        <Plans />
        <Registration />
      </main>
    </div>
  );
};

export default Home;
