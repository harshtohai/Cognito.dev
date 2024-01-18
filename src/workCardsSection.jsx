import WorkCard from "./workCard.jsx"


export default function AllCards() {
  return (
    <>
      <WorkCard projectLink={'https://github.com/harshtohai/Shell-Net'} projectName={'Shell-Net'} status='Completed' bodyText={'A Terminal based Social Media platform. Giving users speed.'} tech={'Python'} />
      <WorkCard projectLink={'https://github.com/harshtohai/Cognito.dev'} projectName={'Cognitowl.dev'} status='Completed' bodyText={'My personal website "This Website".'} tech={'React Js'} /> 
      <WorkCard projectLink={'https://github.com/harshtohai'} projectName={'OG Repo'} status='On Hold' bodyText={'Providing users a new UI Interface of GitHub with feed and chat feature.'} tech={'React Js'} />
      <WorkCard projectLink={'https://github.com/harshtohai/techslangs'} projectName={'Tech Slangs'} status='In Progress' bodyText={'A dictonary of Tech Terms made by you.'} tech={'Nextjs Prisma'} />
    </>
  )

}
