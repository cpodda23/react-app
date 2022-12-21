import { IconName, IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faEllipsis,
  faBed,
  faUsers,
  faWallet,
  faTruckMedical,
  faUserGroup,
  faVenusMars,
  faHouse,
  faHeartPulse,
  faScissors,
  faBrain,
  faChartPie,
  faLocationDot,
  faUserDoctor,
  faNewspaper,
  faGear
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.css'

type Props = {
  name: IconName
  color?: string
  bgColor?: string
  className?: string
}

const iconsMap: Record<string, IconDefinition> = {
  ellipsis: faEllipsis,
  bed: faBed,
  users: faUsers,
  wallet: faWallet,
  truckedical: faTruckMedical,
  userGroup: faUserGroup,
  venusMars: faVenusMars,
  house: faHouse,
  heartPulse: faHeartPulse,
  brain: faBrain,
  scissors: faScissors,
  chartPie: faChartPie,
  locationDot: faLocationDot,
  userDoctor: faUserDoctor,
  newspaper: faNewspaper,
  gear: faGear
}

export function Icon({ name, className, color = 'grey' }: Props) {
  return <FontAwesomeIcon className={className} icon={iconsMap[name]} color={color} />
}
