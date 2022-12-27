import { title } from 'process'
import { Children } from 'react'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { Icon } from './components/Icon'
import { Image } from './components/Image'
import { Sidebar } from './components/Sidebar'
import { Special } from './components/Special'
import { Statistic } from './components/Statistic'
import './style.css'

const Sidebar = () => (
  <div style={{ width: 200, backgroundColor: 'orangered' }}>{children}</div>
)

export const App = () => {
  return (
    <div className="flex">
      <Sidebar>
        <Button />
      </Sidebar>
      <main className="grid">
        <Statistic title="3,256" description="Total Patiens" icon="bed" />
        <Statistic title="394" description="Available Staff" icon="bed" />
        <Statistic title="$2,536" description="Avg Treat. Cost" icon="bed" />
        <Statistic title="38" description="Available Cars" icon="bed" />
        <Card
          className="grid-1-3"
          title="Outpatiens vs. Inpatiens Trend"
          description="Show by months"
        >
          <Image source="http://intellspot.com/wp-content/uploads/2017/12/bar-chart-example.png" />
          <Image source="https://www.shutterstock.com/image-vector/cake-chart-icon-isolated-vector-260nw-1425829127.jpg" />
        </Card>
        <Card title="Patiens By Gender">
          <Image source="https://www.shutterstock.com/image-vector/cake-chart-icon-isolated-vector-260nw-1425829127.jpg" />
        </Card>
        <Card className="grid-1-2" title="Time Admitted" description="Today">
          <Image source="https://www.migliorbrokerforex.net/wp-content/uploads/2019/04/candele-giapponesi-1024x394.png" />
        </Card>
        <Card title="Patiens By Division">
          <Icon name="house" />
        </Card>
        {/* // name="heartPulse", // name="brain", // name="scissors" */}
        <Special title="3,240" description="Patients this month">
          <Image source="https://static.vecteezy.com/ti/vettori-gratis/p1/2733930-infografica-aumento-freccia-sul-grafico-a-barre-design-gratuito-vettoriale.jpg" />
        </Special>
      </main>
    </div>
  )
}
