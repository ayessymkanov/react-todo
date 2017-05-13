import styled from 'styled-components'

export const SortContainer = styled.div`
    display: flex;
`

export const SortItem = styled.a`
    line-height: 1.5;
    text-decoration: none;
    color: #555;

    &:not(:last-child) {
        margin-right: 20px;
    }
`
