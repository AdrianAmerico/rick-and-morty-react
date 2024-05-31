import styled from 'styled-components';

export const TableContainer = styled.div`
width: 100%;
overflow: auto;
border-collapse: collapse;
border-spacing: 0;
margin-top: 1rem;
flex: 1;

  &::-webkit-scrollbar {
    width: 4px;
    height: 0.75rem;
    border-radius: 0.5rem;
  }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.1);
        border-radius: 0.5rem;
    }
`;

export const Table = styled.table`
width: 100%;
border-collapse: collapse;

thead {
    background-color: rgba(0, 0, 0, 0.1);
}

td {
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

th {
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0.5rem;
}
`;
