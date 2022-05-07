export type MessagesDataType = {
    id: number
    message: string
}
export type DialogsDataType = {
    id: number
    name: string
}

export type PostDataType = {
    id: number
    message: string
    likes: number
}

export type ProfilePagesTypes={
    postData:Array<PostDataType>
}

type DialogPages={
    dialogsData:Array<DialogsDataType>
    messagesData:Array<MessagesDataType>
}
export type StateType = {
    profilePages:ProfilePagesTypes
        dialogPages:DialogPages
}

export let state:StateType = {
    profilePages: {
        postData: [
            {id: 1, message: 'Hi world', likes: 11},
            {id: 2, message: 'What you lern?', likes: 22},
            {id: 3, message: 'YO?', likes: 33},
            {id: 4, message: '12345?', likes: 44}
        ]
    },

   dialogPages: {
       dialogsData: [
           {id: 1, name: 'Polina'},
           {id: 2, name: 'Anton'},
           {id: 3, name: 'Andrey'},
           {id: 4, name: 'Dimych'},
           {id: 5, name: 'Artem'},
           {id: 6, name: 'Maksim'},
       ],
       messagesData: [
           {id: 1, message: 'Hi'},
           {id: 2, message: 'How are you?'},
           {id: 3, message: 'Why are you?'},
           {id: 4, message: 'Yo'},
           {id: 5, message: 'Yo'},
           {id: 6, message: 'Yo'},
       ]
   }
}

