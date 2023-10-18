import WorkCard from "./workCard.jsx"


export default function AllCards() {
  return (
    <>
      <WorkCard projectLink={'https://github.com/harshtohai/Shell-Net'} projectName={'Shell-Net'} status='Completed' bodyText={'A Terminal based Social Media platform. Giving users speed.'} tech={'Python'} />
      <WorkCard projectLink={'https://github.com/harshtohai/Shell-Net'} projectName={'HarshToHai'} status='In Progress' bodyText={'My personal website.'} tech={'React Js'} />
      <WorkCard projectLink={'https://github.com/harshtohai/Shell-Net'} projectName={'OG Repo'} status='On Hold' bodyText={'Providing users a new UI Interface of GitHub with feed and chat feature.'} tech={'React Js'} />
      
    </>
  )

}