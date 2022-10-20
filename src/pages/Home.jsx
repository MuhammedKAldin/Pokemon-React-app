import { Navbar } from '../components/Navbar'
import { UpperStats } from '../components/UpperStats'
import { FlavorAppearance } from '../components/FlavorAppearance'
import { MiddleStats } from '../components/MiddleStats'
import { SearchTool } from '../components/SearchTool'
import Store from '../Store';

export const Home = () => {

  return (
    <div>
      <Store>
        <Navbar/>
        <UpperStats/>
        <FlavorAppearance/>
        <MiddleStats/>
        <SearchTool/>
      </Store>
    </div>
  )
}
