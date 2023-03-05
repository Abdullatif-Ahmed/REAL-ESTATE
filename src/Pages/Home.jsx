import SearchForm from "../Components/Search Form/Search Form";
import "../Sass/Pages/Home.scss";
const Home = ({ catg }) => {
  return (
    <>
      <section
        className={`heroSec position-relative d-flex align-items-center justify-content-center ${
          catg === "sale" ? "sale" : "rent"
        } `}
      >
        <div className="box text-center px-3">
          <div className="content mb-5">
            <h1 className="heading mb-2">
              {catg === "sale"
                ? "Discover your perfect home"
                : "Discover your perfect rental"}
            </h1>
            <p className="info">
              {catg === "sale"
                ? "With the most complete source of homes for sale & real estate near you"
                : "Search nearby apartments, condos, and homes for rent"}
            </p>
          </div>
          <SearchForm />
        </div>
      </section>
    </>
  );
};
export default Home;
