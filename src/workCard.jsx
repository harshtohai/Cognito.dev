import './workSection.css'


export default function WorkCard({ projectLink, projectName, status, bodyText, tech, }) {
  return (
    <>
      <a className='link' href={projectLink} target='_blank'>
        <div className='workCard'>
          <div className='header'>
            <h1>{projectName}</h1>
            <div className = {status}>
              <div ></div>
              <p >{status}</p>
            </div>
          </div>
          <div className='bodyText'>
            <p>{bodyText}</p>
          </div>
          <p>{tech}</p>
        </div>
      </a>

    </>
  )
}