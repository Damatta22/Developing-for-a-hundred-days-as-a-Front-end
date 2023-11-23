

import './App.css'

const users = [
  {
    id:1,
  name: 'Carlos',
  age: '28',
  address: 'Rua X',
  isAdmin:'false',

},
{
  id:2,
  name: 'Maria',
  age: '31',
  address: 'Rua XX',
  isAdmin:'true',

},
{
  id:3,
  name: 'Matheus',
  age: '22',
  address: 'Rua XI',
  isAdmin:'false',

},

]

function App() {
  

  return (
    <>
      <div>
      {users.map((user, index) => (
        <h1 key={index}> {user.name},
        {user.age},
        {user.address},
       
   
        </h1>
   
         
        ))}
   
     </div>
     
    </>
  )
}

export default App
