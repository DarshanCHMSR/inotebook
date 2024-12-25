// import Notes from './Notes';

// export const Home = () => {

//     return (
//         <div> 
//             <Notes/>
//         </div>
//     )
// }
import React from 'react';
import Notes from './Notes';

const Home = () => {
  return (
    <div> 
      <Notes showAlert={showAlert} />
    </div>
  );
}

export default Home;  // Ensure it's a default export
