import { RotatingLines } from "react-loader-spinner";
import { WrapperLoader } from "./Loader.styled";

export const Loader = () => {
  return (
    <WrapperLoader>
      <RotatingLines
        strokeColor="#3470ff"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </WrapperLoader>
  );
};
