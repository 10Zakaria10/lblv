import Router from "next/router";
import routes from "~components/Routes/routes";
import { useDeviceSize } from "~utils/useDeviceSize";

interface ILBLogoProps {
  imagePath?: string;
}
const handleLogoClick = () => {
  Router.push(routes.HOME)
}
export const LBLogo: React.FC<ILBLogoProps> = ({ imagePath }) => {
  const { down } = useDeviceSize();
  const getImagePath = () => {
    const path = imagePath ?? "/images/logo.svg";
    return down.tablet ? "/images/Mobile-logo.svg" : path;
  };
  const path = getImagePath();

  return <img src={path} alt="logo" onClick={handleLogoClick}/>;
};
export default LBLogo;
