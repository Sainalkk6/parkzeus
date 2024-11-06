import { ReactNode } from "react"

const ListContainer = ({children}:{children:ReactNode}) => {
    return (
      <div className='px-6 py-3'>
        {children}
      </div>
    )
  }
  
  export default ListContainer
  