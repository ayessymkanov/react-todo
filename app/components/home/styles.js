import styled from 'styled-components'
export const TodoListContainer = styled.div`
    width: 600px;
    min-height: calc(100vh - 100px);
    margin: 0 auto;
    background-color: white;
    border-radius: 5px;
    padding: 20px;
`

export const Title = styled.h1`
    font-size: 20px;
    margin: 0;
    text-transform: uppercase;
    flex: 1
`

export const Menubar = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid #aaa;
`

export const ControlButtons = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
`
