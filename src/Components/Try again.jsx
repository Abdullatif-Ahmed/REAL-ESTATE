import { Alert } from "react-bootstrap";
import { AiOutlineReload } from "react-icons/ai";
const TryAgain = ({ message, reFetch }) => {
  return (
    <Alert variant="danger" className="mb-0">
      {message}
      <button onClick={reFetch}>
        try again
        <AiOutlineReload size="20" />
      </button>
    </Alert>
  );
};
export default TryAgain;
