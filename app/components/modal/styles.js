import styled from 'styled-components'

export const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 25em;
    padding: 40px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 100px 100px 100px 2000px rgba(0,0,0,0.75);
`

export const Input = styled.input`
    display: block;
    width: 100%;
    border: 1px solid #aaa;
    border-radius: 5px;
    padding: 5px 10px;

    &:first-child {
        margin-bottom: 20px;
    }

    &::-webkit-input-placeholder {
        font-size: 14px;
    }

    &[type=submit] {
        background: #36D1DC;
        background: -webkit-linear-gradient(to right, #5B86E5, #36D1DC);
        background: linear-gradient(to right, #5B86E5, #36D1DC);
        color: white;
    }
`

export const CloseBtn = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
    display: block;
    width: 20px;
    height: 20px;
    &::after{
        content: '';
        position: absolute;
        top: 50%;
        display: block;
        width: 100%;
        height: 2px;
        background-color: #aaa;
        transform: rotate(45deg)
    }
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        display: block;
        width: 100%;
        height: 2px;
        background-color: #aaa;
        transform: rotate(-45deg)
    }
`
