export default interface IToDo {
  id: number,
  noteText: string,
  userId: number,
  dayPeriod?: {
    morning: boolean,
    afternoon: boolean,
    night: boolean
  },
  daysOfTheWeek?: {
    sunday: boolean,
    monday: boolean,
    tuesday: boolean,
    wednesday: boolean,
    thrusday: boolean,
    friday: boolean,
    saturday: boolean
  }
}
