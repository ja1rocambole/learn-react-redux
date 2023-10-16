//importando useSelector do react-redux
import { ChangeUserName } from "../../components/ChangeUSerName";
import { StyledHomePage } from "./style";

export const HomePage = () => {
  return (
    <StyledHomePage>
      <ChangeUserName />
    </StyledHomePage>
  );
};

// export default FruitsPage;
