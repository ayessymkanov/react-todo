import styled from 'styled-components'

export const TodoContainer = styled.div`
    display: flex;
    padding: 7px 5px;
    transition: all 300ms;
    &:hover {
        background-color: #eee;
    }
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
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 150ms;
    &:focus {
        outline: none;
    }
    &:first-child {
        margin-right: 10px;
    }
    &:hover {
        background-color: white;
    }
`
