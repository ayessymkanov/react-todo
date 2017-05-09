import React, {Component} from 'react'
import {Select} from './styles'

export default class Sort extends Component {
    render() {
        return(
            <Select>
                <option disabled selected>Sort</option>
                <option value="1">Option1</option>
                <option value="2">Option2</option>
            </Select>
        )
    }
}
