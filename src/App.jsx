// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainDashboard from './Dashboard/Maindashboard.jsx';
import Homepage from './components/Homepage.jsx';

// import CreateYourLock1 from './pages/S1lock/CreateYourLock1.jsx';
// import CreateYourLock2 from './pages/S1lock/CreateYourLock2.jsx';
// import AllDataPage from './pages/S2token/AllDataPage.jsx';
// import MyLockPage from './pages/S2token/MyLockPage.jsx';
// import LiquidityPage from './pages/S3liquidity/LiquidityPage.jsx';
// import MyLockPage2 from './pages/S3liquidity/MyLockPage.jsx';
// import CreateAirdrop from './pages/S4Airdrop/CreateAirdrop.jsx';
// import Airdrop2Page from './pages/S4Airdrop/Airdrop2Page.jsx';
// import Drop3 from './pages/S4Airdrop/Drop3.jsx';
// import ListPage from './pages/S4Airdrop/ListPage.jsx';
// import MyAirdrop from './pages/S4Airdrop/MyAirdrop.jsx';
// import Multisender1 from './pages/S5Multisender/Multisender1.jsx';
// import Multisender2 from './pages/S5Multisender/Multisender2.jsx';
// import Launchpad1 from './pages/S6launchpad/Launchpad1.jsx';
// import Launchpad2 from './pages/S6launchpad/Launchpad2.jsx';

// new code
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PinklockCreate1 from './PinklockPages/PinklockCreate1.jsx';
import ConnectWallet from './PinklockPages/ConnectWallet.jsx';
import PinklockCreate2 from './PinklockPages/PinklockCreate2.jsx';
import PinklockToken from './PinklockPages/PinklockToken.jsx';
import Createpage5 from './PinklockPages/PinklockToken2.jsx';

import Liquidity1 from './Liquidity/Liquidity1.jsx';
import Liquidity2 from './Liquidity/Liquidity2.jsx';
import Multisender from './Liquidity/Multisender.jsx';

import Airdrop1 from './Airdrop/Airdrop1.jsx';
import Airdrop2 from './Airdrop/Airdrop2.jsx';
import Airdrop3 from './Airdrop/Airdrop3.jsx';

import Airdrop4 from './Airdrop/Airdrop4.jsx';
import Airdrop_all from './Airdrop/Airdrop4_all.jsx';
import Airdrop_my from './Airdrop/Airdrop4_Myairdrop.jsx';
import Airdrop_created from './Airdrop/Airdrop4_created.jsx';

import Createlaunchpad1 from "./Launchpad/Createlaunchpad1.jsx"
import Createlaunchpad2 from "./Launchpad/Createlauncpad2.jsx"

import ComingSoon from "./components/ComingSoon.jsx"
import { ThemeProvider } from './context/ThemeContext';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import TermsConditions from './components/TermsConditions.jsx';
import Token from './PinklockPages/Token.jsx';
// import TokenInfo from './component/TokenInfo.jsx';

import TokenLockInfo from './PinklockPages/TokenLockInfo.jsx';
const App = () => {
  return (
   <ThemeProvider>   
    <Router>
      <Routes>
        {/* Wrap the MainDashboard component */}
        <Route path="/" element={<MainDashboard />}>
          {/* Child routes */}
          <Route path="/" element={<Homepage />} />
          {/* <Route path="lock/create1" element={<CreateYourLock1 />} /> */}
          {/* <Route path="lock/create2" element={<CreateYourLock2 />} /> */}
          {/* <Route path="token/all-data" element={<AllDataPage />} />
          <Route path="token/my-lock" element={<MyLockPage />} />
          <Route path="liquidity/page" element={<LiquidityPage />} />
          <Route path="liquidity/my-lock" element={<MyLockPage2 />} />
          <Route path="airdrop/create" element={<CreateAirdrop />} />
          <Route path="airdrop/2" element={<Airdrop2Page />} />
          <Route path="airdrop/3" element={<Drop3 />} />
          <Route path="airdrop/list" element={<ListPage />} />
          <Route path="airdrop/my" element={<MyAirdrop />} />
          <Route path="multisender/1" element={<Multisender1 />} />
          <Route path="multisender/2" element={<Multisender2 />} />
          <Route path="launchpad/1" element={<Launchpad1 />} />
          <Route path="launchpad/2" element={<Launchpad2 />} /> */}
       


        {/* new code */}
        <Route path="PinklockCreate1" element={<PinklockCreate1 />} />
        <Route path="ConnectWallet" element={<ConnectWallet />} />
        <Route path="PinklockCreate2" element={<PinklockCreate2 />} />
        <Route path="PinklockToken" element={<PinklockToken />} />
        <Route path="createpage5" element={<Createpage5 />} /> {/*not routing*/}
        <Route path="Token" element={<Token />} />
        <Route path="TokenLockInfo" element={<TokenLockInfo />} />

        <Route path="/Liquidity1" element={<Liquidity1 />} />
        <Route path="/Liquidity2" element={<Liquidity2 />} />   {/*not for routing*/}
        <Route path="/Multisender" element={<Multisender />} />   {/*Multisender page*/}

        <Route path="/Airdrop1" element={<Airdrop1 />} />
        <Route path="/Airdrop2" element={<Airdrop2 />} />
        <Route path="/Airdrop3" element={<Airdrop3 />} />

        <Route path="/Airdrop4" element={<Airdrop4 />} />
        <Route path="/Airdrop_all" element={<Airdrop_all />} />     {/*not for routing*/}
        <Route path="/Airdrop_my" element={<Airdrop_my />} />     {/*not for routing*/}
        <Route path="/Airdrop_created" element={<Airdrop_created />} />     {/*not for routing*/}

        <Route path="Createlaunchpad1" element={<Createlaunchpad1/>} />
        <Route path="Createlaunchpad2" element={<Createlaunchpad2/>} />

        <Route path="ComingSoon" element={<ComingSoon/>} />

        <Route path="PrivacyPolicy" element={<PrivacyPolicy/>} />
        <Route path="TermsConditions" element={<TermsConditions/>} />

        </Route>
      </Routes>
    </Router>
    </ThemeProvider>

  );
};

export default App;
