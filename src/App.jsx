import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Root} from './routes/Root/Root'
import {Notes, loader as notesloader} from './routes/Notes/Notes'
import {Todo, loader as todoloader} from './routes/Todo/Todo'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path:'Notes', 
        element:<Notes />, 
        loader: notesloader
      },
      {
        path: 'ToDo',
				element: <Todo/>,
				loader: todoloader
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />  
}

export default App
