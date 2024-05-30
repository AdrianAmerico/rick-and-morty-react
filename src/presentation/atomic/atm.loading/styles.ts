import styled, { keyframes } from 'styled-components';

const rollerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Roller = styled.div`
  color: #1c4c5b;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & div {
    animation: ${rollerAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }

  & div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7.2px;
    height: 7.2px;
    border-radius: 50%;
    background: currentColor;
    margin: -3.6px 0 0 -3.6px;
  }

  & div:nth-child(1) {
    animation-delay: -0.036s;
    &:after {
      top: 62.62742px;
      left: 62.62742px;
    }
  }

  & div:nth-child(2) {
    animation-delay: -0.072s;
    &:after {
      top: 67.71281px;
      left: 56px;
    }
  }

  & div:nth-child(3) {
    animation-delay: -0.108s;
    &:after {
      top: 70.90963px;
      left: 48.28221px;
    }
  }

  & div:nth-child(4) {
    animation-delay: -0.144s;
    &:after {
      top: 72px;
      left: 40px;
    }
  }

  & div:nth-child(5) {
    animation-delay: -0.18s;
    &:after {
      top: 70.90963px;
      left: 31.71779px;
    }
  }

  & div:nth-child(6) {
    animation-delay: -0.216s;
    &:after {
      top: 67.71281px;
      left: 24px;
    }
  }

  & div:nth-child(7) {
    animation-delay: -0.252s;
    &:after {
      top: 62.62742px;
      left: 17.37258px;
    }
  }

  & div:nth-child(8) {
    animation-delay: -0.288s;
    &:after {
      top: 56px;
      left: 12.28719px;
    }
  }
`;
