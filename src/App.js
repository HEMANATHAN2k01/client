import { Adminpage } from "./screen/adminpage";
import Login from "./screen/login";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Userpage } from "./screen/userpage";
import { Register } from "./screen/register";
import UserReport from "./screen/UserReport";
import BusAllocation from "./screen/busallowcate";
import BusDataList from "./screen/busreport";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adminpage" element={<Adminpage />} />
          <Route path="/userpage" element={<Userpage />} />
          <Route path="/usereport" element={<UserReport />} />
          <Route path="/busallowcate" element={<BusAllocation />} />
          <Route path="/busdata" element={<BusDataList />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
