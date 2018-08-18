import React from 'react';
import Icons from './Icons';


const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <Icons />   
    </footer>
)

Footer.propTypes = {
    timeout: React.PropTypes.bool
}

export default Footer
