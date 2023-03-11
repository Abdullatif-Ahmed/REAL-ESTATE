import { useParams } from "react-router";

const Search = ({ catg }) => {
  const { fPath, tPath } = useParams();
  return (
    <div>
      Serch {catg === "sale" ? "for sale" : "for rent"} {fPath} {tPath && tPath}
    </div>
  );
};
export default Search;
