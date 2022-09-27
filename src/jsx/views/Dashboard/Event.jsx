/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { withTranslation } from "react-i18next";
import { connect } from 'react-redux';
import { getNewsAction } from '../../../store/actions/EventsAction';


const Event = (props) => {
   // const { t } = useTranslation();
   const { news } = props;
   const [weekendsVisible, setWeekendsVisible] = useState(true);

   const generateEvents = (news) => {
      const listEvents = [];
      news.forEach((value) => {
         const list = {
            id: value.id,
            title: value.title,
            url : `/event/news/details/${value.name}`,
            extendedProps: {
               logo: value.image
            },
            start: value.pubdt
         }
         listEvents.push(list)
      })
      return listEvents
   }


   const INITIAL_EVENTS = generateEvents(news);
   console.log(INITIAL_EVENTS)

   const renderEventContent = (eventInfo) => {
      return (
         <>
            <span style={{
               boxSizing: "border-box",
               display: "inline-block",
               overflow: "hidden",
               width: "initial",
               height: "initial",
               background: "none",
               opacity: 1,
               border: 0,
               margin: 0,
               padding: 0,
               position: "relative",
               maxWidth: "100%"
            }}>
               <span style={{
                  boxSizing: "border-box",
                  display: "block",
                  width: "initial",
                  height: "initial",
                  backgroundk: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%"
               }}>
                  <img style={{
                     display: "block",
                     maxWidth: "100%",
                     width: "initial",
                     height: "initial",
                     backgroundk: "none",
                     opacity: 1,
                     border: 0,
                     margin: 0,
                     padding: 0,
                  }}
                     src={"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"} alt="" />
               </span>
               <img alt="Moonriver One Year Recap"
                  src={eventInfo.event.extendedProps.logo} decoding="async"
                  style={{
                     borderRadius: "24px",
                     backgroundColor: "rgb(255, 255, 255)",
                     position: "absolute",
                     inset: 0,
                     boxSizing: "border-box",
                     padding: 0,
                     margin: "auto",
                     display: "block",
                     width: 0,
                     height: 0,
                     maxWidth: "100%",
                     minWidth: "100%",
                     minHeight: "100%",
                     maxHeight: "100%",
                  }}></img>
            </span>
         </>
      )
   }
   // const handleDateSelect = (selectInfo) => {
   //    let title = prompt('Please enter a new title for your event')
   //    let calendarApi = selectInfo.view.calendar

   //    calendarApi.unselect() // clear date selection

   //    if (title) {
   //       calendarApi.addEvent({
   //          id: createEventId(),
   //          title,
   //          start: selectInfo.startStr,
   //          end: selectInfo.endStr,
   //          allDay: selectInfo.allDay
   //       })
   //    }
   // }

   // const handleEventClick = (clickInfo) => {
   //    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
   //       clickInfo.event.remove()
   //    }
   // }


   const handleEvents = (events) => {
      setWeekendsVisible(events)
   }
   useEffect(() => {
      props.fetchListNews();
   }, [])

   return (
      <>
         <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            themeSystem="bootstrap"
            headerToolbar={{
               left: 'prev,next today',
               center: 'title',
               right: ''
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={weekendsVisible}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            eventContent={renderEventContent} // custom render function
            eventsSet={handleEvents} // called after events are initialized/added/changed/removed
         // eventClick={handleEventClick} // called when events are clicked

         // select={handleDateSelect} // Select to add event

         /* you can update a remote database when these fire:
         eventAdd={function () { }}
         eventChange={function () { }}
         eventRemove={function () { }}

         */
         />
      </>
   );
};
const mapStateToProps = (state) => {
   return {
      news: state.news,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      fetchListNews: () => {
         dispatch(getNewsAction())
      }
   }
}
export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Event));
