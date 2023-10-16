import { useDispatch, useSelector } from "react-redux";
import { StyledChangeUserName } from "./style";
import { changeName } from "../../store/modules/names/actions";
import { useState } from "react";

export const ChangeUserName = () => {
  const dispatch = useDispatch();

  const [nameInput, setNameInput] = useState("");

  const user = useSelector((state) => state.user);

  const handleClick = () => {
    dispatch(changeName(nameInput));
    console.log(nameInput);
  };

  return (
    <StyledChangeUserName>
      <p>User name : {user.name}</p>

      <input
        type="text"
        placeholder="New name"
        onChange={(e) => setNameInput(e.target.value)}
      />

      <button onClick={() => handleClick()}>Change</button>
    </StyledChangeUserName>
  );
};
