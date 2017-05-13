import React, {Component} from 'react'
import {SortContainer, SortItem} from './styles'
import './styles.css'

export default class Sort extends Component {
    render() {
        const { activeList } = this.props
        return(
            <SortContainer>
                <SortItem
                    className={activeList === 'all' ? 'activeList' : ''}
                    href="#" onClick={this.props.sortAll}>
                    all
                </SortItem>
                <SortItem
                    className={activeList === 'active' ? 'activeList' : ''}
                    href="#" onClick={this.props.sortActive}>
                    active
                </SortItem>
                <SortItem
                    className={activeList === 'done' ? 'activeList' : ''}
                    href="#" onClick={this.props.sortDone}>
                    done
                </SortItem>
            </SortContainer>
        )
    }
}
