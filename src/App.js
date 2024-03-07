import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div>
        <Header />
        <Body />
      </div>
    </ChakraProvider>
  );
}

export default App;
