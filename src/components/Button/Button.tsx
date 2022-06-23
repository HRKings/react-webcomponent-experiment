import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

const StyledButton = styled.button`
font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
font-weight: 700;
border: 0;
border-radius: 3em;
cursor: pointer;
display: inline-block;
line-height: 1;

color: ${(props: ButtonProps) => props.primary ? "white" : "#333"};
background-color: ${(props: ButtonProps) => props.primary ? "#1ea7fd" : "transparent"};
${(props: ButtonProps) => props.primary ? "" : "box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;"}

${(props: ButtonProps) => props.backgroundColor ? `background-color: ${props.backgroundColor};` : ""}

font-size: 14px;
padding: 11px 20px;
`;

const SmallStyledButton = styled(StyledButton)`
font-size: 12px;
padding: 10px 16px;
`

const LargeStyledButton = styled(StyledButton)`
font-size: 16px;
padding: 12px 24px;
`

/**
 * Primary UI component for user interaction
 */
export const Button = (props : ButtonProps) => {
  switch (props.size) {
    case "small":
      return (
        <SmallStyledButton {...props}>
          {props.label}
        </SmallStyledButton>
      );

    case "large":
      return(
        <LargeStyledButton {...props}>
          {props.label}
        </LargeStyledButton>
      );

    default:
      return(
        <StyledButton {...props}>
          {props.label}
        </StyledButton>
      );
  }
};
