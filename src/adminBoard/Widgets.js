import React from 'react'
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader,
  CCol,
  CLink,
  CRow,
  CWidgetStatsB,
  CWidgetStatsC,
  CWidgetStatsE,
  CWidgetStatsF,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cilArrowRight,
  cilBasket,
  cilBell,
  cilChartPie,
  cilMoon,
  cilLaptop,
  cilPeople,
  cilSettings,
  cilSpeech,
  cilSpeedometer,
  cilUser,
  cilUserFollow,
} from '@coreui/icons'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import { DocsExample } from 'src/components'

import WidgetsBrand from './WidgetsBrand'
import WidgetsDropdown from './WidgetsDropdown'

const Widgets = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
// this will be used to display latest statistics
  return (
    <CCard className="mb-4">
      <CCardHeader>Widgets</CCardHeader>
      <CCardBody>       
        <DocsExample href="components/widgets/#cwidgetstatsf">
          <CRow xs={{ gutter: 4 }}>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsF
                icon={<CIcon width={24} icon={cilSettings} size="xl" />}
                title="income"
                value="$1.999,50"
                color="primary"
                footer={
                  <CLink
                    className="font-weight-bold font-xs text-body-secondary"
                    href="https://coreui.io/"
                    rel="noopener norefferer"
                    target="_blank"
                  >
                    View more
                    <CIcon icon={cilArrowRight} className="float-end" width={16} />
                  </CLink>
                }
              />
            </CCol>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsF
                icon={<CIcon width={24} icon={cilLaptop} size="xl" />}
                title="income"
                value="$1.999,50"
                color="info"
                footer={
                  <CLink
                    className="font-weight-bold font-xs text-body-secondary"
                    href="https://coreui.io/"
                    rel="noopener norefferer"
                    target="_blank"
                  >
                    View more
                    <CIcon icon={cilArrowRight} className="float-end" width={16} />
                  </CLink>
                }
              />
            </CCol>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsF
                icon={<CIcon width={24} icon={cilMoon} size="xl" />}
                title="income"
                value="$1.999,50"
                color="warning"
                footer={
                  <CLink
                    className="font-weight-bold font-xs text-body-secondary"
                    href="https://coreui.io/"
                    rel="noopener norefferer"
                    target="_blank"
                  >
                    View more
                    <CIcon icon={cilArrowRight} className="float-end" width={16} />
                  </CLink>
                }
              />
            </CCol>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsF
                icon={<CIcon width={24} icon={cilBell} size="xl" />}
                title="income"
                value="$1.999,50"
                color="danger"
                footer={
                  <CLink
                    className="font-weight-bold font-xs text-body-secondary"
                    href="https://coreui.io/"
                    rel="noopener norefferer"
                    target="_blank"
                  >
                    View more
                    <CIcon icon={cilArrowRight} className="float-end" width={16} />
                  </CLink>
                }
              />
            </CCol>
          </CRow>
        </DocsExample>
      </CCardBody>
    </CCard>
  )
}

export default Widgets
