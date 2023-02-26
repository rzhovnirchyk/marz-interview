import Spinner from "../Spinner/Spinner";

export default function PageSpinner() {
  return (
    <div
      className="flex flex-row justify-center w-full pt-4"
      data-testid="loading-spinner-container"
    >
      <Spinner />
    </div>
  );
}
