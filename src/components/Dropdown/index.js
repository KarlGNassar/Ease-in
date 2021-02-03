import React from 'react'
import { NavData } from '../../data/NavData'
import { Button } from '../Button'
import {
    DropdownContainer,
    Icon,
    CloseIcon,
    DropdownWrapper,
    DropdownMenu,
    DropdownLink,
    BtnWrap
} from './DropdownElements'

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <DropdownWrapper>
                <DropdownMenu>
                    {
                        NavData.map((item, i) => (
                            <DropdownLink to={item.to} key={i} onClick={toggle} smooth={true} duration={1000}>
                                {item.title}
                            </DropdownLink>
                        ))
                    }
                </DropdownMenu>

                <BtnWrap>
                    <Button big='true' to='contact'>
                        Contact Us
                    </Button>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
