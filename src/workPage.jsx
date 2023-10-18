import './workSection.css'
import AllCards from './workCardsSection.jsx'

export default function Workpage() {
  return (
    <>
      <div id='WorkPageMainDiv'>
        <div id='workHeader'>
          <h1>My Work</h1>
        </div>
        <div className='flexBox'>
          <AllCards />
        </div>
      </div>
    </>
  )
}