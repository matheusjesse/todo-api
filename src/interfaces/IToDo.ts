export default interface IToDo {
  id?: number,
  noteText: string,
  completed: boolean,
  userId: number,
  dayPeriod?: IDayPeriod,
  daysOfTheWeek?: IDayOfTheWeek
}

export interface ITodoUpdate {
  id: number,
  noteText: string,
  completed: boolean,
  userId: number,
  dayPeriod: IDayPeriod,
  daysOfTheWeek: IDayOfTheWeek
}

export interface IDayPeriod {
  morning: boolean,
  afternoon: boolean,
  night: boolean
}

export interface IDayOfTheWeek {
  sunday: boolean,
  monday: boolean,
  tuesday: boolean,
  wednesday: boolean,
  thrusday: boolean,
  friday: boolean,
  saturday: boolean
}
