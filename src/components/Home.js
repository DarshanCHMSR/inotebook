// import Notes from './Notes';

// export const Home = () => {

//     return (
//         <div> 
//             <Notes/>
//         </div>
//     )
// }
import React from 'react';
import AddNote from './AddNote';

const Home = (props) => {
  const showAlert = props

  
  return (
    <div> 
        <AddNote />
    </div>
  );
}

export default Home;  // Ensure it's a default export
