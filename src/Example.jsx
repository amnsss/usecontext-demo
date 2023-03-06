import React, { useState } from 'react';

/**
 * 前置知识点：
 * Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。 
 * 
 * 知识点 useContext：
 * 接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。
 * 当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定。
 */

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

function Example() {
  const [theme, setTheme] = useState(themes.light);

  return (
    <>
      APP
      <Toolbar theme={theme} setTheme={setTheme} />
    </>
  );
}

function Toolbar(props) {
  // Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
  // 属性“theme”对 Toolbar 组件并没有用，但必须将这个值层层传递下去。
  return (
    <div style={{ marginLeft: 10 }}>
      Toolbar
      <ThemedButton theme={props.theme} setTheme={props.setTheme} />
    </div>
  );
}

function ThemedButton(props) {
  const { theme, setTheme } = props;
  return (
    <div style={{ marginLeft: 10 }}>
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
      <div style={{ marginTop: 8 }}>
        设置主题：
        <button onClick={() => setTheme(themes.dark)}>黑</button> &nbsp;
        <button onClick={() => setTheme(themes.light)}>白</button>
      </div>
    </div>
  );
}

export default Example;
