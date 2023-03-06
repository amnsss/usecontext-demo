import React, { useContext } from 'react';
import UserProvider, { UserContext } from './UserProvider';

function Example3() {
  return (
    <UserProvider>
      <>
        <Header />
        <Content />
        <Footer />
      </>
    </UserProvider>
  )
}

function Header () {
  const { userInfo, isAuth, login, logout } = useContext(UserContext);
  return (
    isAuth ? (
      <>
        <div>欢迎您，{userInfo.name}</div>
        <button onClick={logout}>登出</button>
      </>
    )
    : (<button onClick={login}>登录</button>)
  )
}

function Content() {
  const { userInfo, isAuth } = useContext(UserContext);
  return (
    isAuth ? (
      <>
        <div>年龄：{userInfo.age}</div>
      </>
    )
    : (<div>请先登录</div>)
  )
}

function Footer() {
  return (
    <>
      <div>Footer</div>
    </>
  )
}  

export default Example3;