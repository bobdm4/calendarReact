import React, { FC } from 'react'
import { Calendar } from 'antd'
import { IEvent } from './../models/IEvent'
import { Moment } from 'moment'
import { formatDate } from './../utils/date'

interface EventCalendarProps {
  events: IEvent[]
}

export const EventCalendar: FC<EventCalendarProps> = props => {
  function dateCellRender(value: Moment) {
    const formatedDate = formatDate(value.toDate())
    const currentDayEvents = props.events.filter(ev => ev.date === formatedDate)
    return (
      <ul className='events'>
        {currentDayEvents.map((ev, index) => (
          <div key={index}>{ev.description}</div>
        ))}
      </ul>
    )
  }

  return <Calendar dateCellRender={dateCellRender} />
}
