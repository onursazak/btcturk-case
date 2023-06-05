import { useMediaQuery } from "react-responsive";

const useGetDeviceType = () => {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 1224 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 767, maxWidth: 1224 });

  return {
    isMobile,
    isTablet,
    isMobileOrTablet,
    isDesktop: !isMobileOrTablet,
  };
};

export { useGetDeviceType };
