import ISignUpWording from "~containers/signup/wording/types";
import { SignInBlockLabel, SignInBlockWrapper, SignUpLabel } from "./styles";
interface ISignInBlock {
  onClick: () => void;
  wording: ISignUpWording;
}
const SignInBlock: React.FC<ISignInBlock> = ({ onClick, wording }) => {
  return (
    <SignInBlockWrapper>
      <SignInBlockLabel>{wording.signInBlock.label}</SignInBlockLabel>
      <br />
      <SignUpLabel onClick={onClick}>{wording.signInBlock.SignInBtnText}</SignUpLabel>
    </SignInBlockWrapper>
  );
};
export default SignInBlock;
