import Leftcontent from './leftcontent'
import Rightcontent from './rightcontent'

const Page1content = (props) => {
  return (
    <div className='py-10 flex items-center gap-10 h-[calc(100vh-8rem)] px-18'>
      <Leftcontent />
      <Rightcontent users={props.users} />

    </div>
  )
}

export default Page1content