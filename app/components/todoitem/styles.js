import styled from 'styled-components'

export const TodoContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
`

export const Text = styled.span`
    flex: 4;
`

export const Controls = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-around;
`


//for now, will change later with the arrival of icons
export const Button = styled.button`
    flex: 1;
    padding: 0;
    border-color: transparent;
    &:focus {
        outline: none;
    }
    &:first-child {
        margin-right: 10px;
    }
`
