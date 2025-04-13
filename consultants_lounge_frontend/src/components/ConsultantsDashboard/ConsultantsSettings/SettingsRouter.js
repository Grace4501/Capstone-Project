import { useParams } from 'react-router-dom';
import SettingsAccount from './SettingsAccount.js'
import SettingsNotifications from './SettingsNotifications.js'
import SettingsPayment from './SettingsPayment.js'
import SettingsSecurity from './SettingsSecurity.js'

export default function SettingsRouter() {
  const { tab } = useParams();

  switch (tab) {
    case 'account':
      return <SettingsAccount />;
    case 'security':
      return <SettingsSecurity />;
    case 'payment':
      return <SettingsPayment />;
    case 'notifications':
      return <SettingsNotifications />;
    default:
      return <SettingsAccount />;
  }
}
