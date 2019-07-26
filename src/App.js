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
    pagination_count: 0,
    a: [],
    b: []
  }

  chooseCategory(event) {
    this.setState({selectedCategory: event.target.value});
    this.getImages();
  }



  async getCategories()
  {
      try{
          axios.defaults.headers.common['x-api-key'] = "8e805f31-3dfd-4cce-998c-e4337e5150ea" 
          
          let response = await axios.get('https://api.thecatapi.com/v1/categories/' ) 
          this.setState({categories: response.data});
          console.log("-- ("+this.state.categories.length +") Categories from TheCatAPI.com")

          console.log(this.state.categories)
      }catch(err){
          console.log(err)
      }
  }

  async getImages()
  {
      try{
          axios.defaults.headers.common['x-api-key'] = "8e805f31-3dfd-4cce-998c-e4337e5150ea" 
          let query_params = {
              limit: this.state.limit,
              order: this.state.order,
              page: this.state.page-1,
              category_ids: this.state.selectedCategory
          }
          let response = await axios.get('https://api.thecatapi.com/v1/images/search', { params: query_params } ) 
          this.pagination_count = response.headers['pagination-count'];
          this.setState({images: response.data});
          this.setState({page: this.state.page + 1});
          console.log("-- ("+this.state.images.length +") Images from TheCatAPI.com")
          console.log( this.pagination_count ,'images available for this query.')
          
      }catch(err){
          console.log(err)
      }
  }

  async showMoar()
  {
      try{
          axios.defaults.headers.common['x-api-key'] = "8e805f31-3dfd-4cce-998c-e4337e5150ea" 
          let query_params = {
              limit: this.state.limit,
              order: this.state.order,
              page: this.state.page-1,
              category_ids: this.state.selectedCategory
          }
          let response = await axios.get('https://api.thecatapi.com/v1/images/search', { params: query_params } ) 
          this.pagination_count = response.headers['pagination-count'];

          this.setState({a: this.state.images});
          this.setState({b: response.data});
          this.setState({c: this.state.a.concat(this.state.b)});

          console.log('a:', this.state.a);
          console.log('b:',this.state.b);
          console.log('c:',this.state.c);
          this.setState({images: this.state.c});
          this.setState({page: this.state.page + 1});

          console.log(this.state.images);


 
          console.log("-- ("+this.state.images.length +") Images from TheCatAPI.com")
          console.log( this.pagination_count ,'images available for this query.')
          
      }catch(err){
          console.log(err)
      }
  }

  showMore() {
    this.showMoar();
    console.log(this.state.images)
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
        <Feed showMore={this.showMore.bind(this)} images={this.state.images}/>
      </div>
    );
  }
}

export default App;
