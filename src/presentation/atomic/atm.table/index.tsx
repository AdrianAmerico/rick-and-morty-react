import styled from 'styled-components';

export const TableContainer = styled.div`
width: 100%;
overflow: auto;
border-collapse: collapse;
border-spacing: 0;
margin-top: 1rem;
flex: 1;
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
    &:not(:first-child) {
        text-align: center;
    }
}

th {
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    &:first-child {
        padding: 0.5rem 0.5rem 0.5rem 1rem;
        border-radius: 0.5rem 0 0 0;
    }

    &:last-child {
        padding: 0.5rem 1rem 0.5rem 0.5rem;
        border-radius: 0 0.5rem 0 0;
    }
}
`;
