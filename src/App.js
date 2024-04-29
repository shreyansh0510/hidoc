import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Typography } from "@mui/material";
import Main from "./components/main/Main";

function App() {
  return (
    <>
      <Typography>
        <Header />
        <Main />
        <Footer />
      </Typography>
    </>
  );
}

export default App;
