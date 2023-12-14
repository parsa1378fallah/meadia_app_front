import ClipLoader from "react-spinners/ClipLoader";
const loading = ({ type, size, color, classes }) => {
  return (
    <div className={classes}>
      <ClipLoader
        color={color}
        loading={type}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
export default loading;
