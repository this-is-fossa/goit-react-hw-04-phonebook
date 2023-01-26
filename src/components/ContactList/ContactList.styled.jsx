import styled from '@emotion/styled';

export const CardList = styled.ul`
  width: 350px;
  margin-left: 10px;
  padding: 0;
`;

export const Card = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const DeleteBtn = styled.button`
  width: 50px;
  height: 20px;
  display: block;
  padding: 0;
  background-color: #ffffff;
  border: 1px solid #414040;
  cursor: pointer;
  border-radius: 5px;

  :hover {
    border-color: #3838f6;
    background-color: #3838f6;
    color: #ffffff;
  }
`;
