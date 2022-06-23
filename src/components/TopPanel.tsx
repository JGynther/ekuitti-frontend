import { useWindowSize } from "@utils/hooks";
import Header from "./Header";
import Navigation from "./Navigation";

const TopPanel: React.FC = () => {
  const { width } = useWindowSize();
  return width > 1000 ? (
    <>
      <Header />
      <Navigation />
    </>
  ) : (
    <></>
  );
};

export default TopPanel;
