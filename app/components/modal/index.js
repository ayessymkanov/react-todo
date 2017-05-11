import React, {Component} from 'react'
import {ModalContainer, Input, CloseBtn} from './styles'

class Modal extends Component {
    render() {
        console.log(this.props)
        return (

                <ModalContainer>
                    <form action="">
                        <Input type="text" placeholder="Enter a title for new TODO"/>
                        <Input type="submit" value="Done"/>
                        <CloseBtn onClick={this.props.onClick}></CloseBtn>
                    </form>
                </ModalContainer>
        )
    }
}

export default Modal
