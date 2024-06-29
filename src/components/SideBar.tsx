import '../styles/sidebar.scss'
import StepInfo from './StepInfo'
function SideBar() {
  return (
    <div className="sideBar">
        <StepInfo index={1} step="STEP 1" category='YOUR INFO'/>
        <StepInfo index={2} step="STEP 2" category='SELECT PLAN'/>
        <StepInfo index={3} step="STEP 3" category='ADD-IONS'/>
        <StepInfo index={4} step="STEP 4" category='SUMMARRY'/>
    </div>
  )
}

export default SideBar