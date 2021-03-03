
import React from 'react'
import Cardlist from '../components/Cardlist'
import Scroll from '../components/Scroll'
import Searchbox from '../components/searchbox'
import '../app.css'


  class App extends React.Component {
      constructor()
      {
          super();
          this.state ={
            robots :[],
            searchfi:'',
        }
      }
    onChangeSearch = (event) =>
    {
        this.setState({searchfi: event.target.value})
       
    }
    componentDidMount()
    {
      fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({robots:users}))
    }
  render()
  {
    const searchFillter= this.state.robots.filter(
        robots =>
        {
            return robots.name.toLowerCase().includes(this.state.searchfi.toLowerCase());
        }
    )
      return(
    <div className='tc container'>
        <h1>Robot Friend</h1>
        <Searchbox onChangeSearch={this.onChangeSearch} />
        <hr/>
        <Scroll> <Cardlist className="containerCard" robots={searchFillter}/></Scroll>
       
    </div>
  
)};
   
}
export default App;