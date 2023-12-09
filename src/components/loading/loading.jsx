import ClipLoader from "react-spinners/ClipLoader";
const loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <ClipLoader
        color={"#123123"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
export default loading;
