import Button from "@components/Button"
import Search from "./Search"

const Navigation: React.FC = ({ children }) => {
    return (
      <nav className="bg-neutral-900 sticky top-0 border-neutral-600 py-2">
        <div className="flex container mx-auto px-4 items-center justify-between">
          <div className='flex space-x-10'>
            <Search />
            <Button>Lisää kuitti</Button>
          </div>
          <div className='flex space-x-5'>
            <Button type="round"/>
            <Button type="round"/>
            <Button type="round"/>
          </div>
        </div>
      </nav>
    )
  }

export default Navigation