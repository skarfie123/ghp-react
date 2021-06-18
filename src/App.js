import { CodeBlock } from '@atlaskit/code'; // npm i @atlaskit/code 
import logo from './logo.svg';
import github from './GitHub-Mark.svg'
import './App.css';

const packageJSON = `{
  //...
  "scripts": {
    //...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  //...
  "homepage": "http://skarfie123.github.io/ghp-react"
}`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          GitHub Pages - React
          &nbsp;
          <a href="https://github.com/skarfie123/ghp-react"><img class="github"
            src={github} alt="GitHub Logo" /></a>
        </h2>
        <ol>
          <li><code className="command">create-react-app ghp-react</code></li>
          <li><code className="command">cd ghp-react</code></li>
          <li><code className="command">npm install gh-pages --save-dev</code></li>
          <li><code className="file">package.json</code>:
            <CodeBlock language="json" highlight="5,6,9" text={packageJSON} /></li>
          <li><code className="command">git remote add origin https://github.com/skarfie123/ghp-react.git</code></li>
          <li><code className="command">git push -u origin main</code></li>
          <li><code className="command">npm run deploy</code></li>
        </ol>
        <p>More details at <a href="https://github.com/gitname/react-gh-pages">https://github.com/gitname/react-gh-pages</a></p>
      </header>
    </div>
  );
}

export default App;
