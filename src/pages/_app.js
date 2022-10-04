import { CalendarProvider } from "../providers/calendarProvider";
import GlobalStyles from "../styles/GlobalStyles";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ReminderProvider } from "../providers/reminderProvider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <CalendarProvider>
          <ReminderProvider>
            <Component {...pageProps} />{" "}
          </ReminderProvider>
        </CalendarProvider>
      </LocalizationProvider>
    </>
  );
}

export default MyApp;
