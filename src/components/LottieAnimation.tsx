import Lottie from "react-lottie";

const LottieAnimation = ({
  width = 100,
  height = 100,
  animationData = {},
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={height} width={width} />;
};

export default LottieAnimation;
