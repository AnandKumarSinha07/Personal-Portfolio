import "./skills.css"
import checkMarkIcon from "../../assets/checkmark-dark.svg"
import SkillList from '../../common/SkillList';


function Skills() {
    
  return (

    <section id="skills" className='container'>
      <h1 className="sectionTitle">Skills</h1>
      
      <div className='skillList'>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="Node" />
      </div>
      
      <div className='skillList'>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Vscode" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
      </div>
     
      <div className='skillList'>
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Webpack" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Jest" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
      </div>
    </section>
  );
}

export default Skills;