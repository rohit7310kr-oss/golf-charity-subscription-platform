import CharityList from "./components/CharityList";
import Header from "./components/Header";
import Login from "./components/Login";
import Plans from "./components/Plans";
import Registration from "./components/Registration";
import Form from "./components/Form";

const Home = function () {
  return (
    <div>
      <Header />
      <main>
        <CharityList />
        <Plans />
        {/* {isLogin ? <Login /> : <Registration />} */}
        <Form />
      </main>
    </div>
  );
};

export default Home;
