import { GlobalContext } from "./Context";

const SearchForm = () => {
    const{setSearch} = GlobalContext()
    const handleSubmit = (e)=>{
        e.preventDefault();
        const searchValue = e.target.elements.search.value
        if(!searchValue){
            return
        }else{
            console.log(e.target.elements);
            setSearch(e.target.elements.search.value)
        }
        
    }
  return (
    <>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="dog" 
          
        />
        <button type="submit" className="btn" name="vat">search</button>
      </form>
    </>
  );
};

export default SearchForm;
