import React, { FC, useEffect, useState } from 'react'
import { Button, Layout, Modal, Row } from 'antd'
import { EventCalendar } from '../components/EventCalendar'
import { EventForm } from '../components/EventForm'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from './../hooks/useTypedSelector'
import { IEvent } from './../models/IEvent'

export const Event: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const { fetchGuests, createEvent, fetchEvents } = useActions()
  const { quests, events } = useTypedSelector(state => state.event)
  const { user } = useTypedSelector(state => state.auth)

  useEffect(() => {
    fetchGuests()
    fetchEvents(user.username)
  }, [])

  const addNewEvent = (event: IEvent) => {
    setIsModalVisible(false)
    createEvent(event)
  }

  return (
    <Layout>

      <EventCalendar events={events} />
      <Row justify='center'>
        <Button onClick={() => setIsModalVisible(true)}> Add new event</Button>
      </Row>
      <Modal title='New event' visible={isModalVisible} footer={null} onCancel={() => setIsModalVisible(false)}>
        <EventForm quests={quests} submit={addNewEvent} />
      </Modal>
    </Layout>
  )
}
