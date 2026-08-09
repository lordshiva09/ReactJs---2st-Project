import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
 

const App = () => {
  const users = [
  {
    img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   intro:'',
   tag:'Satisfied',
   color:'#F87171'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1683121067971-bf3efce082b8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   intro:'',
   tag:'Underserved',
   color:'#60A5FA'
  },
  {
    img:'https://images.unsplash.com/photo-1636191284490-fff58f369ec6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGVtcGxveWVlfGVufDB8fDB8fHww',
   intro:'',
   tag:'Underbanks',
   color:'#FBBF24'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1681494630816-6711406f51f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW1wbG95ZWUlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D',
    intro:'',
    tag:'Employee',
    color:'#34D399'
  },
  {
    img:'https://images.unsplash.com/photo-1745434159123-5b99b94206ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGVtcGxveWVlJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
    intro:'',
    tag:'Unemployee',
    color:'#A78BFA'
  },
  {
    img:'https://images.unsplash.com/photo-1556817977-00e61f659427?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGVtcGxveWVlJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
    intro:'',
    tag:'Jobless',
    color:'#FB923C'
  }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App