import { useQuery } from "@tanstack/react-query";
import { GlobalContext } from "./Context";
import axios from "axios";
const Gallery = () => {
  const { search } = GlobalContext();
  if(search.length<3){
    return (
        <section className='image-container'>
          <h4>Please type more words...</h4>
        </section>
      );
  }
  console.log(search);
  const url =
    `https://api.unsplash.com/search/photos?page=3&client_id=${import.meta.env.VITE_API_KEY}`;
  const resp = useQuery({
    queryKey: ["Images",search],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${search}&per_page=30`);
      return result.data;
      
    },
    
  });
  if (resp.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading....</h4>
      </section>
    );
  }
  if (resp.isError) {
    return (
      <section className="image-container">
        <h4>Error...</h4>
      </section>
    );
  }
  
  const results = resp.data.results;
  if(results.length<2){
    return (
        <section className='image-container'>
          <h4>Sorry couldn't find the image...</h4>
        </section>
      );
  }
  console.log(resp.data.results);
  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          ></img>
        );
      })}
    </section>
  );
};

export default Gallery;
