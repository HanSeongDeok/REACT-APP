import logo from './logo.svg';
import './App.css';

const list = [{
  id: 1, 
  title: "HTML" 
},
{
  id: 2, 
  title: "CSS" 
},
{
  id: 3, 
  title: "JAVASCRIPT" 
}
]

function Header(props) {
  return <header> 
      <h1><a href="/"> {props.title} </a></h1>
      </header>
}

function Article(props) {
  return <article>
      <h2>{props.test}</h2>
          {props.bodies}
      </article>
}

/**
 * 
 * @param {*} props 
 * @returns 
 */
let Nav = (props) => {
  const combin_list = [];
  for(let i = 0; i < props.list.length; i++) {
    combin_list.push(<li key={props.list[i].id}>
      <a href={'/read/'+ props.list[i].id}>{props.list[i].title}</a>
      </li>)
  }  
  return <nav>
        <ol>
          {combin_list}
          {/* <li><a href="/read/1"> HTML </a></li>
          <li><a href="/read/2"> CSS </a></li>
          <li><a href="/read/3"> JS </a></li> */}
        </ol>
      </nav>
}

function App() {
  return (
    <div className="App">
      <Header title="REACT"></Header>
      <Nav list = {list}></Nav>
      <Article test="WELCOME" bodies = "HELLO WROLD"></Article>
    </div>
  );
}

export default App;
