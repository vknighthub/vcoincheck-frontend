
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
console.log(todayStr)
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Moonbuilders Workshop',
    url: "/event/4639/moonriver-one-year-recap",
    extendedProps: {
        logo: "https://dmccdn.com/uploads/moonbeam-logo-200x200-01.png"
    },
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Anh Ben',
    url: "/event/4639/moonriver-one-year-recaps",
    extendedProps: {
        logo: "https://dmccdn.com/uploads/moonbeam-logo-200x200-01.png"
    },
    start: "2022-09-28"
  }
]

export function createEventId() {
  return String(eventGuid++)
}
