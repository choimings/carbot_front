// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/main/main';
import Notification from './components/notification/notification';
import Login from './components/auth/login';
import Join from './components/auth/join';
import CarInfo from './components/carinfo/carInfo';
import CarSelect from './components/carselect/carSelect';
import Layout from './components/Layout';
import FindID from './components/auth/findID';
import FindPW from './components/auth/findPW';
import ResetPW from './components/auth/resetPW';
import Mypage from './components/mypage/mypage';
import CallbotIcon from './components/callbot/callbotIcon';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Layout을 모든 페이지의 상위 컴포넌트로 설정 */}
          <Route element={<Layout />}>
            <Route path='/' element={<Main />} />
            <Route path='/notification' element={<Notification />} />
            <Route path='/mypage' element={<Mypage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/join' element={<Join />} />
            <Route path='/findID' element={<FindID />} />
            <Route path='/findPW' element={<FindPW />} />
            <Route path='/resetPW' element={<ResetPW />} />
            <Route path='/carInfo' element={<CarInfo />} />
            <Route path='/carSelect' element={<CarSelect />} />
          </Route>
        </Routes>
        <CallbotIcon />
      </div>
    </Router>
  );
};

export default App;
