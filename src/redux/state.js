let state = {
    profilePage: {
        dialogs: [
            { id: 1, name: 'Natalia' },
            { id: 2, name: 'Vlad' },
            { id: 3, name: 'Viktor' },
            { id: 4, name: 'Gleb' },
            { id: 5, name: 'Anfisa' },
            { id: 6, name: 'Irina' },
            { id: 7, name: 'Ruskan' }
        ],
        messages: [
            { id: 1, message: "Hello." },
            { id: 2, message: "How are you?" },
            { id: 3, message: "Learn React?" },
            { id: 4, message: "And Redux?" },
            { id: 5, message: "Yo!" }
        ],
    },
    postPage: {
        posts: [
            {id: 1, post: "Hello, how are you?", likecounts: 11 },
            {id: 2, post: "It`s my first post", likecounts: 23 }
        ]
    }    
}


export default state;