import React from 'react'
import styled from '@emotion/styled'

const MyHamburger = styled.div`
    background:none;
    border:none;
    cursor: pointer;
    display: flex;
    height: 32px;

    flex-direction: column;
    justify-content: space-evenly;

    position:relative;
    padding:1rem;
    width: 32px;
    z-index:100;


    &:focus{
        outline: none; 
    }

    @media only screen and (min-width: 768px) {
        display:none;
    }
`

const HamburgerContainer = styled.div`
position: absolute;
top: 0;
right: 0;
`

const HamburgerLines = styled.div`
    height:2px;
    width: 32px;
    background: #333333;
    transition: all .25s ease-in;
`

const TopLine = styled(HamburgerLines)`
    transform: ${(props) => 
        props.isOpen ? 'rotate(45deg)' : 'rotate(0)))'
    };

    position: ${(props) => 
        props.isOpen ? 'relative' : 'initial'
    };

    top: ${(props) => 
        props.isOpen ? '25%' : 'initial'
    };

    background: ${(props) => 
        props.isOpen ? '#333333' : '#333333'
    };

    @media only screen and (min-width: 768px) {
        transform:'rotate(0)))';
        position: 'initial';
        bottom: 'initial';
        background: '#ffffff';
    }
`

const MidLine = styled(HamburgerLines)`
    opacity ${(props) => 
        props.isOpen ? '0' : '1'
    };

@media only screen and (min-width: 768px) {
    opacity: '1';
}
`

const BotLine = styled(HamburgerLines)`
    transform: ${(props) => 
        props.isOpen ? 'rotate(-45deg)' : 'rotate(0)))'
    };

    position: ${(props) => 
        props.isOpen ? 'relative' : 'initial'
    };

    bottom: ${(props) => 
        props.isOpen ? '25%' : 'initial'
    };

    background: ${(props) => 
        props.isOpen ? '#333333' : '#333333'
    };

@media only screen and (min-width: 768px) {
    transform:'rotate(0)))';
    position: 'initial';
    bottom: 'initial';
    background: '#ffffff';
}
`

const Hamburger = (props) => (
<HamburgerContainer>
<MyHamburger>
    <TopLine {...props} /> 
    <MidLine {...props} />
    <BotLine {...props} />
</MyHamburger>
</HamburgerContainer>
)

export default Hamburger;