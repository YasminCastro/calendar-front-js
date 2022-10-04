import moment from "moment";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const CalendarContext = createContext({});

export const CalendarProvider = ({ children }) => {
  const todayDate = moment();
  const [selectedDate, setSelectedDate] = useState(todayDate);
  const [today, setToday] = useState(todayDate);
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    const calendarArray = [];
    const startDay = selectedDate.clone().startOf("month").startOf("week");
    const endDay = selectedDate.clone().endOf("month").endOf("week");

    let date = startDay.clone().subtract(1, "day");

    while (date.isBefore(endDay, "day"))
      calendarArray.push({
        days: Array(7)
          .fill(0)
          .map(() => date.add(1, "day").clone()),
      });

    setCalendar(calendarArray);
  }, [selectedDate]);

  const value = useMemo(
    () => ({
      selectedDate,
      setSelectedDate,
      calendar,
      setCalendar,
      today,
    }),
    [selectedDate, setSelectedDate, calendar, setCalendar, today]
  );

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendar = () => useContext(CalendarContext);
