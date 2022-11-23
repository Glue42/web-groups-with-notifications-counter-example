import { NotificationsProvider } from '@glue42/notifications-ui-react/'
import Group from "@glue42/groups-ui-react/";
import "@glue42/groups-ui-react/dist/styles/styles.css";
import { CustomGroupCaptionBar } from './components/groupCaptionBar';
import { CustomFlatCaptionBar } from './components/flatCaptionBar';
import { CustomTabHeaderButtons } from './components/tabHeaderButtons';

const App = () => {
  return (
    <NotificationsProvider>
      <Group
        components={{
          group: {
            CaptionBar: CustomGroupCaptionBar,
          },
          flat: {
            CaptionBar: CustomFlatCaptionBar
          },
          tabs: {
            Buttons: CustomTabHeaderButtons
          }
        }}
      />
    </NotificationsProvider>
  );
};

export default App;
