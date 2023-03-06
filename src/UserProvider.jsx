
import React, { useState, useEffect } from 'react';

export const UserContext = React.createContext();

function UserProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    // 模拟请求，用户信息
    setTimeout(() => {
      setUserInfo({
        name: '张三',
        age: 18,
      });
      setIsAuth(true);
    }, 2000);
  }, []);

  // 模拟登录
  const login = () => {
    // 模拟请求，用户登录
    setTimeout(() => {
      setUserInfo({
        name: '张三',
        age: 18,
      });
      setIsAuth(true);
    }, 2000);
  }

  const logout = () => {
    // 模拟请求，用户登出
    setTimeout(() => {
      setUserInfo(null);
      setIsAuth(false);
    }, 2000);
  }

  return (
    <UserContext.Provider value={{ userInfo, isAuth, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;