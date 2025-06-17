import PropTypes from 'prop-types'
import { Tab, Tabs, Box } from '@mui/material'
import SyncAltSharpIcon from '@mui/icons-material/SyncAltSharp'
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded'
import FrontHandOutlinedIcon from '@mui/icons-material/FrontHandOutlined'
import TroubleshootOutlinedIcon from '@mui/icons-material/TroubleshootOutlined'

const TabsComponent = ({ onTabChange, activeTab }) => {
  const value = activeTab
  const tabLabels = [
    { label: 'Trasladado', icon: <SyncAltSharpIcon /> },
    { label: 'Acreditable', icon: <VerifiedRoundedIcon /> },
    { label: 'Retenido', icon: <FrontHandOutlinedIcon /> },
    { label: 'Determinado', icon: <TroubleshootOutlinedIcon /> },
  ]
  const handleChange = (event, newValue) => {
    onTabChange(newValue) // delegás el control a App.jsx
  }

  return (

    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} variant="fullWidth">
        {tabLabels.map((tab, index) => (
          <Tab
            key={index}
            icon={tab.icon}
            iconPosition="start"
            label={tab.label}
            sx={{
              backgroundColor: value === index ? '#ffffff' : '#f3f4f6',
              borderTopLeftRadius: '8px',
              borderTopRightRadius: '8px',
              fontWeight: 'bold',
              color: '#143559',
              ':hover': {
                backgroundColor: '#143559',
                color: '#ffffff',
              },
              '&.Mui-selected': {
                boxShadow: 'inset 0 -2px 0 #143559',
              },
            }}
          />
        ))}
      </Tabs>
    </Box>
  )
}

TabsComponent.propTypes = {
  onTabChange: PropTypes.func.isRequired,
  activeTab: PropTypes.number.isRequired,
}

export default TabsComponent
