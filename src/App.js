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
      <a id={props.list[i].id} href={'/read/'+ props.list[i].id} onClick={event=>{
        event.preventDefault();
        props.onClick(event.target.id)
        /*props.onClick(props.list[i].id)*/

      }}>{props.list[i].title}</a>
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
      <Header title="REACT" onClick={()=>alert("IT IS HEADER!")}></Header>
      <Nav list = {list} onClick={id=>alert(id)}></Nav>
      <Article test="WELCOME" bodies = "HELLO WROLD"></Article>
    </div>
  );
}

function Header(props) {
  return <header> 
      <h1><a href="/" onClick={(event) => {
          event.preventDefault();
          props.onClick();
      }}> {props.title} </a></h1>
      </header>
}

export default App;
