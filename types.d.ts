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