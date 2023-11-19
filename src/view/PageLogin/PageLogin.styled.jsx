import styled from '@emotion/styled';

export const PageLoginSection = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 30%;

  width: 600px;
  margin: 0 auto;
  margin-top: 40px;

  padding: 2em;
  border-radius: 6px;
  box-shadow: inset rgba(0, 0, 0, 0.6);
`;

export const PageLoginTitle = styled.h1`
  font-size: 18px;
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
`;

export const PageHomeLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

export const PageHomeInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0 20px;
  display: inline-block;
  box-sizing: border-box;
  transition: background-color 0.5s ease-in-out;
  border: 2px solid rgb(8, 78, 8);
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  
`;

export const PageHomeBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100%;
  padding: 5px;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
  font-size: 15px;
  
`;