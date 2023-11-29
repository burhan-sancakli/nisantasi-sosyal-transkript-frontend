import { flip } from "react-animations";
import styled, { keyframes } from "styled-components";

const LoginAnimation = styled.div`
  animation: 2s ${keyframes`${flip}`};
`;
export default LoginAnimation;
