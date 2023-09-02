import { GlobalContext } from "./Context";

const SearchForm = () => {
    const{setSearch} = GlobalContext()
    const handleSubmit = (e)=>{
        e.preventDefault();
        const searchValue = e.target.value
        if(!searchValue){
            return
        }else{
            console.log(e.target.value);
            setSearch(e.target.value)
        }
        
    }
  return (
    <>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form">
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="dog" 
        />
        <button type="submit" className="btn" onClick={handleSubmit}>search</button>
      </form>
    </>
  );
};

export default SearchForm;
