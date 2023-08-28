import styled from 'styled-components';

export const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
    border-bottom: 1px solid #ccc;

    button {
      padding: 2px 5px;
      background-color: #dc3545;
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }
  }
`;
