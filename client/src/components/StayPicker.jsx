import { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function StayPicker() {
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  //This starts with EMPTY range and updates as the user selects dates(sasawa..........)
  const [range, setRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ]);

  const formatDate = (date) =>
    date?.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
    });

  
  const handleSelect = (item) => {
    const selection = item.selection;
    setRange([selection]);

    const { startDate, endDate } = selection;

   
    if (
      startDate &&
      endDate &&
      startDate.getTime() !== endDate.getTime()
    ) {
      setTimeout(() => {
        setOpen(false);
      }, 200);
    }
  };

  
  const isValidRange =
    range[0].startDate &&
    range[0].endDate &&
    range[0].startDate.getTime() !== range[0].endDate.getTime();

  return (
    <div className="stay-wrapper" ref={wrapperRef}>

      {/* DISPLAYING */}
      <div className="stay-display" onClick={() => setOpen(true)}>
        {isValidRange
          ? `${formatDate(range[0].startDate)} — ${formatDate(range[0].endDate)}`
          : "Check-in — Check-out"}
      </div>

      {/* CALENDAR */}
      {open && (
        <div className="calendar-popup">
          <DateRange
            ranges={range}
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
            editableDateInputs={true}
          />
        </div>
      )}

    </div>
  );
}