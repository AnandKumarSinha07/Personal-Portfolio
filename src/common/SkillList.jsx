
import PropTypes from 'prop-types';

function SkillList({ src, skill }) {
    return (
      <span className='skill-set'>
        <img src={src} alt="Checkmark icon" />
        <p>{skill}</p>
      </span>
    );
  }

SkillList.propTypes = {
    src: PropTypes.string.isRequired,
    skill:PropTypes.string.isRequired
    
  };
  
  
  export default SkillList;