import React, {Component} from 'react'
import {SortContainer, SortItem} from './styles'

export default class Sort extends Component {
    render() {
        return(
            <SortContainer>
                <SortItem href="#" >active</SortItem>
                <SortItem href="#">done</SortItem>
            </SortContainer>
        )
    }
}
