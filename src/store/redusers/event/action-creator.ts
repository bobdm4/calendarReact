import { IUser } from './../../../models/IUser'
import { EventActionEnum, SetEventsAction, SetGuestsAction } from './types'
import { IEvent } from './../../../models/IEvent'
import { AppDispatch } from '../..'
import UserService from './../../../api/UserService'

export const EventActionCreators = {
  setQuests: (payload: IUser[]): SetGuestsAction => ({ type: EventActionEnum.SET_QUESTS, payload }),
  setEvents: (payload: IEvent[]): SetEventsAction => ({ type: EventActionEnum.SET_EVENTS, payload }),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers()
      dispatch(EventActionCreators.setQuests(response.data))
    } catch (error) {
      console.log(error)
    }
  },
  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]'
      const json = JSON.parse(events) as IEvent[]
      json.push(event)
      dispatch(EventActionCreators.setEvents(json))
      localStorage.setItem('events', JSON.stringify(json))
    } catch (error) {}
  },
  fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]'
      const json = JSON.parse(events) as IEvent[]
      const currentUserEvent = json.filter(ev => ev.author === username || ev.quest === username )
			dispatch(EventActionCreators.setEvents(currentUserEvent))
    } catch (error) {
      console.log(error)
    }
  },
}
