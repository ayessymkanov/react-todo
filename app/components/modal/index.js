import React, {Component} from 'react'
import {ModalContainer, Input, CloseBtn} from './styles'

class Modal extends Component {
    render() {
        console.log(this.props)
        let { addTodo } = this.props
        return (

                <ModalContainer>
                    <form onSubmit={addTodo}>
                        <Input type="text" autofocus placeholder="Enter a title for new TODO"/>
                        <Input type="submit" value="Done"/>
                        <CloseBtn onClick={this.props.onClick}></CloseBtn>
                    </form>
                </ModalContainer>
        )
    }

}

export default Modal
