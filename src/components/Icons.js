const React = require('react');
const { SocialIcon } = require('react-social-icons');

const Icons = () => (
    <div className='social'>
        <p><SocialIcon url="http://linkedin.com/in/johnnypackard" /></p>
        <p><SocialIcon url="https://github.com/johnnypackard" /></p>
        <p><SocialIcon url="https://www.instagram.com/giannipakkuman/" /></p>  
    </div>
);

export default Icons;