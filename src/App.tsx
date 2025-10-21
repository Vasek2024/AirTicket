import { Provider } from "react-redux";
import { store } from "./shared/store";
import Header from "./components/Header";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { useWindowSize } from "./shared/myWindowSizeHook";
import Content from "./components/Content";

function App() {
  const { isDesctopSize } = useWindowSize();
  return (
    <Provider store={store}>
      <div className="container max-w-[1070px] m-auto">
        <Header />
        <main className="main flex justify-between gap-[50px] mx-[10px]">
          {isDesctopSize && <Sidebar />}
          <Content />
        </main>
      </div>
    </Provider>
  );
}

export default App;
