import { ITodoUpdate } from '../../src/interfaces/IToDo';
export const todoMock: ITodoUpdate[] =
  [
    {
      "id": 1,
      "noteText": "tomar café",
      "completed": true,
      "userId": 1,
      "dayPeriod": {
        "morning": true,
        "afternoon": false,
        "night": false
      },
      "daysOfTheWeek": {
        "sunday": true,
        "monday": false,
        "tuesday": false,
        "wednesday": true,
        "thrusday": true,
        "friday": true,
        "saturday": false
      }
    },
    {
      "id": 5,
      "noteText": "Comprar manteiga",
      "completed": false,
      "userId": 1,
      "dayPeriod": {
        "morning": true,
        "afternoon": true,
        "night": true
      },
      "daysOfTheWeek": {
        "sunday": true,
        "monday": true,
        "tuesday": true,
        "wednesday": true,
        "thrusday": true,
        "friday": true,
        "saturday": true
      }
    }
  ]

  export const todoPostMockBody = {
    "noteText": "Comprar feijão",
    "userId": "5",
    "completed": false,
    "dayPeriod": {
      "morning": true,
      "afternoon": true,
      "night": false
    },
    "daysOfTheWeek": {
      "sunday": true,
      "monday": true,
      "tuesday": true,
      "wednesday": true,
      "thrusday": true,
      "friday": true,
      "saturday": true
    }
  }

  export const todoPostMockResponse = {
    "id": 6,
    "noteText": "Comprar feijão",
    "completed": false,
    "dayOfTheWeekId": 6,
    "dayPeriodId": 6,
    "userId": "1"
  }

  export const todoPutMockBody = {
    "id": 1,
     "noteText": "Beber àgua",
    "dayPeriod": {
         "morning": false,
         "afternoon": false,
         "night": false
    },
    "daysOfTheWeek": {
        "sunday": false,
        "monday": true,
        "tuesday": true,
        "wednesday": true,
        "thrusday": true,
        "friday": true,
        "saturday": true
    }
 }

 export const todoPatchMockResponse = {
  "id": 1,
  "noteText": "Beber àgua",
  "completed": false,
  "userId": 1
}