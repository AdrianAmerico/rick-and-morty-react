import styled from 'styled-components';
import { spacing } from '../obj.constants';

export const BreadcrumbsContent = styled.div`
display: flex;
align-items: center;
gap: ${spacing.large};
padding: ${spacing.large};
border-bottom: 1px solid rgba(0, 0, 0, 0.1);
width: 100%;

a {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: ${spacing.small};
    border-radius: 50%;
    transition: ease all 250ms;
    
    img {
        width: 100%;
        height: 100%;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
}

.image-container {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
    }
}

.text-container {
    display: flex;
    flex-direction: column;
    gap: ${spacing.xSmall};

}
`;
