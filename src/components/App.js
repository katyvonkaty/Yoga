import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
// import SearchCollection from "./SearchCollection";


class App extends React.Component {
  state = {images: []};
  // state = {collections: []};

onSearchSubmit = async (term) => {
  const response =  await unsplash.get("/search/photos", {
      params: {query: term,  per_page:50}
    });
    this.setState({images: response.data.results});
  }

  // onCollectionSearch = async (term) => {
  //   const response =  await unsplash.get("/search/collections", {
  //       params: {query: term}
  //     });
  //     this.setState({collections: response.data.results});
  //     console.log(response.data.results.)
  //   }

  render(){
    return <div className="ui container" style={{marginTop: "30px"}}>
    <SearchBar onSubmit = {this.onSearchSubmit} />
     <ImageList images={this.state.images} />
     Found: {this.state.images.length} images
    </div>

  }
}

export default App
