import WorkCard from "./workCard.jsx"


export default function AllCards() {
  return (
    <>
      <WorkCard projectLink={'https://github.com/harshtohai/Shell-Net'} projectName={'Shell-Net'} status='Completed' bodyText={'A Terminal based Social Media platform. Giving users speed.'} tech={'Python'} />
      <WorkCard projectLink={'https://github.com/harshtohai/Cognito.dev'} projectName={'Cognito.dev'} status='Completed' bodyText={'My personal website.'} tech={'React Js'} />
      <WorkCard projectLink={'https://github.com/harshtohai/TermTion'} projectName={'TermTion'} status='Completed' bodyText={'Its a Terminal based Notion like app.'} tech={'Python'} />
      <WorkCard projectLink={'https://github.com/harshtohai'} projectName={'OG Repo'} status='On Hold' bodyText={'Providing users a new UI Interface of GitHub with feed and chat feature.'} tech={'React Js'} />
      
    </>
  )

}