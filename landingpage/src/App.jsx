import React from 'react';  
import Section1 from './components/section1/Section1.jsx';
import Section2 from './components/section2/Section2.jsx';


function App() {
const users =[
  {
    img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
    intro:'',
    tag:'Satisfied',
    color:'lightseagreen'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag:'Underserved',
    color:'lightgreen'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag:'Underbranded',
    color:'lightblue'
  },
  {
    img:'https://images.unsplash.com/photo-1585554414787-09b821c321c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag:'Average',
    color:'yellowgreen'
  }

]

  return (
    <div>
   <Section1  users={users}/>
   <Section2 />
    </div>
  );
}

export default App;