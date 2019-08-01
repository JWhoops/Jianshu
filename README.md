

<html>
  <body>
    <h1>My React and Redux Notebook</h1>
    <p>I worte this SPA project by implementing React and Redux in depth.</p>
    <p>I use this project as Redux reference.</p>
    <h1>Why React?</h1>
    <h4>1. Declarative Programming</h4>
    <p>Data-driven programming, redue DOM manipulation code, build page based on data</p>
    <h4>2. Co-exist with Different Framework(Angular, Vue...)</h4>
    <p>Because of React's feature, React can manage its component wihout affect elements managed by other frame work.</p>
    <h4>3. Component</h4>
    <p>React is all based on component, not element, make it easier for testing.</p>
    <h4>4. Single Direction Data Flow</h4>
    <p>This design make unit testing a lot easier. For example, if one parent has a lot of child elements, and these child elements can     modify state of parent element. If there is anything in state go wrong, we have to test every child element to find out bug. </p>
    <h4>5. View Layer Framework</h4>
    <p>without redux, React is only a view layer framework because it is hard to manage passing data between different component.</p>
    <h4>6. Functional Programming</h4>
    <p>Functional Programming is always a good practice.</p>
  

  <h2>Redux basics:</h2>
  <img src="https://i.ytimg.com/vi/hiaqhI62zZs/hqdefault.jpg" alt="redux flow">
  <br><h3>Three principles:</h3>
  <ol>
    <li> only one store</li>
    <li> only store can change it's content (not reducer), reducer should deep copy previous state and update it, one main reason is React use strict comparison instead of deep comparison to compare the change of state for improving performance. That means if we mutate state directly, React will not find the changes between new state and old state using strict comparison because it is the same state(instance). React doesn't use deep comparison because it is too expensive. </li>
    <li>reducer must be pure function(fixed input and output, and prevent object mutation)</li>
  </ol>
  <h3>Redux core API:</h3>
  <ol>
    <li>createStore()</li>
    <li>store.dispatch() //pass action to store</li>
    <li>store.getState() //get data(state) from store</li>
    <li>store.subscribe() //this function is used to monitor the changed of store.</li>
  </ol>
  <h3>Redux middleware:</h3>
  <img src ="http://i.imgur.com/5miA6AT.png" alt="redux middleware flow">
  <h2>Middleware for asynchronous loading:</h2>
  <h2>smaller project</h2>
  <h3>1.redux-thunk (put logic into action creator)</h3>
  <ul>
    <li>install, import, and configure redux-thunk(https://github.com/reduxjs/redux-thunk)</li>
    <li>in store, run redux-thunk using middleware and composerEnhancer()</li>
    <li>actionCreator can now also receive an function instead of an action object</li>
    <li>create a  function in actionCreator and put asynchrous logic in it</li>
    <li>this function will return a result action after asynchrous and pass it to antoher action object</li>
    <li>the result action will be passed to reducer by store</li>
  </ul>
  <h2>larger project</h2>
  <h3>2.redux-saga (put logic into saga):</h3>

  <ul>
    <li>configure redux-saga in store file: https://github.com/redux-saga/redux-saga</li>
    <li>create saga.js (store asychrous logic)</li>
    <li>run saga.js to store using middleware</li>
    <li>write saga logic, saga can receive action</li>
    <li>based on action that saga received to create antoher action and send it to store using put()</li>
    <li>then store will pass action to reducer</li>
  </ul>
  </body>
</html>

