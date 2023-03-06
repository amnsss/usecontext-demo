import React, { useContext, useState } from 'react';

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

const ThemeContext = React.createContext(null);

function Example() {
  const [theme, setTheme] = useState(themes.light);
  return (
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 themes.light 作为当前的值传递下去。
    <ThemeContext.Provider value={{ theme, setTheme }}>
      APP
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  // 中间的组件再也不必指明往下传递 theme 了。
  return (
    <div style={{ marginLeft: 10 }}>
      Toolbar
      <ThemedButton />
    </div>
  );
}

/**
 * Context 数据共享
 * useContext 取值
 * 扩展：配合 useReducer 可以实现 redux 的功能，下一节讲 useReducer 使用
 */
function ThemedButton(props) {
  // 指定 useContext 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 themes.light。
  // 也可以用 Context.Consumer 读取当前的 context 值。
  const { theme, setTheme } = useContext(ThemeContext);
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

/**
 * Context 数据共享
 * contextType 取值，只能获取单一 context 值
 */
// class ThemedButton extends React.Component {
//   // 指定 contextType 读取当前的 theme context。
//   // React 会往上找到最近的 theme Provider，然后使用它的值。
//   // 在这个例子中，当前的 theme 值为 themes.light。
//   // 也可以用 Context.Consumer 读取当前的 context 值。
//   static contextType = ThemeContext;
//   render() {
//     return (
//       <div style={{ marginLeft: 10 }}>
//         <button style={{ background: this.context.background, color: this.context.foreground }}>
//           I am styled by theme context!
//         </button>
//       </div>
//     );
//   }
// }

/**
 * Context 数据共享
 * Context.Consumer 取值，可获取多个 context 值
 */
// class ThemedButton extends React.Component {
//   // Context.Consumer 读取当前的 context 值。
//   render() {
//     return (
//       <div style={{ marginLeft: 10 }}>
//         <ThemeContext.Consumer>
//           {theme => (
//             <button style={{ background: theme.background, color: theme.foreground }}>
//               I am styled by theme context!
//             </button>
//           )}
//         </ThemeContext.Consumer>
//       </div>
//     );
//   }
// }

export default Example;
