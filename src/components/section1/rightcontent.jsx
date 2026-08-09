import Rightcard from "./Rightcard"
import 'remixicon/fonts/remixicon.css'

const rightcontent = (props) => {
  return (
    <div id="right" className="h-full overflow-x-auto flex flex-nowrap  gap-10  p-5 w-2/3">
        {props.users.map(function(elem,idx){
          return <Rightcard key={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color} />
        })}
       
      
    
    </div>
  )
}

export default rightcontent