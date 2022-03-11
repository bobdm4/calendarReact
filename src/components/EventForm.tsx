import React, { FC, useState } from 'react'
import { Button, DatePicker, Form, Input, Row, Select } from 'antd'
import { rules } from '../utils/rules'
import { IUser } from '../models/IUser'
import { IEvent } from '../models/IEvent'
import { Moment } from 'moment'
import { formatDate } from './../utils/date'
import { useTypedSelector } from './../hooks/useTypedSelector'

interface EventFormProps {
  quests: IUser[]
  submit: (event: IEvent) => void
}

export const EventForm: FC<EventFormProps> = props => {
  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    quest: '',
  } as IEvent)

  const { user } = useTypedSelector(state => state.auth)

  const selectDate = (date: Moment | null) => {
    if (date) {
      setEvent({ ...event, date: formatDate(date.toDate()) })
    }
  }

  const submitForm = () => {
    props.submit({ ...event, author: user.username })
  }

  return (
    <Form onFinish={submitForm}>
      <Form.Item label='Event description' name='description' rules={[rules.required()]}>
        <Input value={event.description} onChange={e => setEvent({ ...event, description: e.target.value })} />
      </Form.Item>
      <Form.Item label='Event date' name='date' rules={[rules.required(), rules.isDateAfter('Select future date')]}>
        <DatePicker onChange={date => selectDate(date)} />
      </Form.Item>
      <Form.Item label='Select quest' name='quest' rules={[rules.required()]}>
        <Select onChange={(quest: string) => setEvent({ ...event, quest })}>
          {props.quests.map(quest => (
            <Select.Option value={quest.username} key={quest.username}>
              {quest.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Row justify='end'>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Add event
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}
