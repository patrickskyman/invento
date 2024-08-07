import { TabContent, TabPane } from 'reactstrap'
import TabHeader from './TabHeader'
import { TabCustomizerType } from '@/Types/ThemeCustomizerTypes'

const TabCustomizer :React.FC<TabCustomizerType> = ({ callbackNav, selected }) => {
  return (
    <TabContent activeTab={selected}>
      <TabHeader callbackNav={callbackNav} />
      <div className="customizer-body custom-scrollbar">
    
      </div>
    </TabContent>
  )
}

export default TabCustomizer