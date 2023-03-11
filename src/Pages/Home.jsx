import { Col, Container, Row } from "react-bootstrap";
import SearchForm from "../Components/Search Form/Search Form";
import {
  TbHomeDollar,
  TbHomeSearch,
  TbHomeEdit,
  TbHomeDot,
  TbHomeStats,
} from "react-icons/tb";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import "../Sass/Pages/Home.scss";
const Home = ({ catg }) => {
  return (
    <>
      <section
        className={`heroSec position-relative d-flex align-items-center justify-content-center ${
          catg === "sale" ? "sale" : "rent"
        } `}
      >
        <div className="box px-3">
          <div className="content text-center mb-5">
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
          <SearchForm catg={catg} />
        </div>
      </section>
      <section className="servicesSec">
        <Container>
          <Row>
            <Col md="6" lg="4">
              <div className="d-flex align-items-center mb-5">
                <div>
                  <TbHomeDollar size="70" className="me-4" />
                </div>
                <div className="content">
                  <h2 className="heading">Sell your home</h2>
                  <p className="info">
                    We do a free evaluation to be sure you want to start
                    selling.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="6" lg="4">
              <div className="d-flex align-items-center mb-5">
                <div>
                  <TbHomeSearch size="70" className="me-4" />
                </div>
                <div className="content">
                  <h2 className="heading">Buy a home</h2>
                  <p className="info">
                    We do a free evaluation to be sure you want to start
                    selling.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="6" lg="4">
              <div className="d-flex align-items-center mb-5">
                <div>
                  <TbHomeDot size="70" className="me-4" />
                </div>
                <div className="content">
                  <h2 className="heading">Home inspection</h2>
                  <p className="info">
                    We do a free evaluation to be sure you want to start
                    selling.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="6" lg="4">
              <div className="d-flex align-items-center mb-5">
                <div>
                  <TbHomeEdit size="70" className="me-4" />
                </div>
                <div className="content">
                  <h2 className="heading">Rent a house</h2>
                  <p className="info">
                    We do a free evaluation to be sure you want to start
                    selling.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="6" lg="4">
              <div className="d-flex align-items-center mb-5">
                <div>
                  <TbHomeStats size="70" className="me-4" />
                </div>
                <div className="content">
                  <h2 className="heading">Free evaluation</h2>
                  <p className="info">
                    We do a free evaluation to be sure you want to start
                    selling.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="6" lg="4">
              <div className="d-flex align-items-center mb-5">
                <div>
                  <SiHomeassistantcommunitystore size="70" className="me-4" />
                </div>
                <div className="content">
                  <h2 className="heading">Marketing presentation </h2>
                  <p className="info">
                    We do a free evaluation to be sure you want to start
                    selling.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="trendSec text-center position-relative">
        <div className="overlay top-0 start-0 w-100 h-100 position-absolute"></div>
        <div className="content position-relative">
          <h2 className="heading">Trends</h2>
          <p className="info mx-auto">
            Antique Iowa Home With a Bell Tower Rings In as the Week’s Most
            Popular Listing
          </p>
        </div>
      </section>
    </>
  );
};
export default Home;
