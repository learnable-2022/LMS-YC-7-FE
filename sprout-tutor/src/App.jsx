import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    alchemyProvider({ apiKey: import.meta.env.VITE_REACT_APP_ALCHEMY_APIKEY }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Sprout Tutor",
  projectId: "ceabba65c3e4902de6d4d0205d55c2c4",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Login from "./Pages/Login-Page/Login";
import Forget from "./Pages/Login-Page/New-Password";
import NewP from "./Pages/Login-Page/Forget-Password";
import PasswordChanged from "./Pages/Login-Page/Changed-Password";
import RegisterStudent from "./Pages/AuthStudent/RegisterStudent";
import RegisterTeacher from "./Pages/AuthTeacher/RegisterTeacher";
import RegisterParent from "./Pages/AuthParent/RegisterParent";
import Landing from "./Pages/Landing/Landing";
import Teacher from "./Pages/Teacher/Teacher";
import Student from "./Pages/Student/Student";
import StudentExplore from "./Pages/StudentExplore/StudentExplore";

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Forget-Password" element={<NewP />} />
              <Route path="/New-Password" element={<Forget />} />
              <Route path="/PasswordChanged" element={<PasswordChanged />} />
              <Route path="/register/student" element={<RegisterStudent />} />
              <Route path="/register/teacher" element={<RegisterTeacher />} />
              <Route path="/register/parent" element={<RegisterParent />} />
              <Route path="/teacherdashboard" element={<Teacher />} />
              <Route path="/studentdashboard" element={<Student />} />
              <Route path="/studentexplore" element={<StudentExplore />} />
            </Routes>
          </Router>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
