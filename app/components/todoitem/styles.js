import styled from 'styled-components'

export const TodoContainer = styled.div`
    display: flex;
    padding: 7px 5px;
    transition: all 300ms;
    border-radius: 5px;
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
    font-size: 16px;
    border-radius: 2px;

    & > svg {
        height: 20px;
    }
    &:focus {
        outline: none;
    }
    &:first-child {
        margin-right: 10px;
        position: relative;
        &:hover {
            &::after {
                opacity: 1;
            }
        }

        &::after {
            content: 'Mark as done';
            position: absolute;
            top: 100%;
            left: 50%;
            display: block;
            width: 50px;
            opacity: 0;
            transform: translateX(-50%);
            background-color: #555;
            color: white;
            padding: 1px 2px;
            border-radius: 2px;
            font-size: 10px;
            transition: all 100ms;
        }
    }
    &:last-child {
        position: relative;
        &:hover {
            &::after {
                opacity: 1;
            }
        }
        &::after {
            content: 'Remove';
            position: absolute;
            top: 100%;
            left: 50%;
            display: block;
            opacity: 0;
            transform: translateX(-50%);
            background-color: #555;
            color: white;
            padding: 1px 2px;
            border-radius: 2px;
            font-size: 10px;
            transition: all 100ms;
        }
    }
    &:hover {
        background-color: white;
    }
`
