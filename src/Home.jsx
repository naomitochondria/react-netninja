import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isPending, errApi } = useFetch("http://localhost:8000/blogs");
  
    return (
      <div className="home">
            { isPending && <div className="loading"> Loading... </div> }
            { errApi && <div className="errApi"> { errApi } </div>}
            { blogs && <BlogList blogs={ blogs } title="All blogs" /> }
      </div>
    );
}
   
export default Home;