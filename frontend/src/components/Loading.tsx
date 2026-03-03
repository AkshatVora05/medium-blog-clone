import { ThreeDots } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 ">
      <ThreeDots
        height="50"
        width="50"
        radius="9"
        color="#e2e8f0"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
};