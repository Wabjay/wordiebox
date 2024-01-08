type Post = {
    "userId": number,
    "id": number,
    "title": string,
    "body": string,
}

type User = {
    payload:{
          _id: string,
          userName: string,
          email: string,
          karmaCredit: number,
          gamePoint: number,
          role: string,
          referral: string,
          attempts: number,
          history: [],
          createdAt: string,
          updatedAt: string,
          __v: number
        }
}

type Game = {
    number : number[],
    scrambled: string,
    correct: string,
    date: string,
    meaning: string,
    status: boolean,
    point: number,
  }