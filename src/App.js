import React, {Component} from 'react';
import './App.css';
import Categories from './components/Categories/Categories'
import Feed from './components/Feed/Feed'
import axios from 'axios'

class App extends Component  {
  state = {
    categories: [],
    selectedCategory: null,
    images: [],
    order:'Desc',
    page: 1,
    limit: 10,
    pagination_count: 0
  }

  chooseCategory(event) {
    this.setState({selectedCategory: event.target.value});
    this.getImages();
  }

  async getCategories()
  {
      try{
          axios.defaults.headers.common['x-api-key'] = "8e805f31-3dfd-4cce-998c-e4337e5150ea" // Replace this with your API Key, as it's set to defaults it will be used from now onwards
          
          let response = await axios.get('https://api.thecatapi.com/v1/categories/' ) 
          this.setState({categories: response.data});
          console.log("-- ("+this.state.categories.length +") Categories from TheCatAPI.com")
          // pick one to display initially
          //this.setState({selectedCategory: this.state.categories[0]});
          console.log(this.state.categories)
      }catch(err){
          console.log(err)
      }
  }

  async getImages()
  {
      try{
          axios.defaults.headers.common['x-api-key'] = "8e805f31-3dfd-4cce-998c-e4337e5150ea" // Replace this with your API Key
          
          let query_params = {
              limit: this.state.limit,
              order: this.state.order,
              page: this.state.page-1,
              category_ids: this.state.selectedCategory
          }
          let response = await axios.get('https://api.thecatapi.com/v1/images/search', { params: query_params } ) 
          this.pagination_count = response.headers['pagination-count'];
          this.setState({images: response.data});
          console.log("-- ("+this.state.images.length +") Images from TheCatAPI.com")
          console.log( this.pagination_count ,'images available for this query.')
          
      }catch(err){
          console.log(err)
      }
  }


  componentDidUpdate(prevState) {
    if(this.state.selectedCategory) {
      this.getImages();
      this.setState({selectedCategory: null})
    }
  }

  componentDidMount() {
    this.getCategories();
    this.getImages();
  }

  render () {
    return (
      <div className="App">
        <Categories categories={this.state.categories} chooseCategory={this.chooseCategory.bind(this)}/>
        <Feed images={this.state.images}/>
      </div>
    );
  }
}

export default App;
