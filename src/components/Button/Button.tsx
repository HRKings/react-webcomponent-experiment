import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

function getSizeCss(size?: string) {
  switch(size) {
    case "small":
      return `
      font-size: 12px;
      padding: 10px 16px;`;

    case "large":
      return `
      font-size: 16px;
      padding: 12px 24px;`;

    default:
      return `
      font-size: 14px;
      padding: 11px 20px;
      `;
  }
}

function getTypeCss(isPrimary?: boolean) {
  if (isPrimary) {
    return `
    color: white;
    background-color: #1ea7fd;
    `;
  }

  return `
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  `;
}

const StyledButton = styled.button`
font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
font-weight: 700;
border: 0;
border-radius: 3em;
cursor: pointer;
display: inline-block;
line-height: 1;

${(props: ButtonProps) => getTypeCss(props.primary)}
${(props: ButtonProps) =>  getSizeCss(props.size)}
${(props: ButtonProps) => props.backgroundColor ? `background-color: ${props.backgroundColor};` : ""}
`;

/**
 * Primary UI component for user interaction
 */
export const Button = (props : ButtonProps) => {
  return (
    <StyledButton {...props}>
      {props.label}
    </StyledButton>
  );
};
