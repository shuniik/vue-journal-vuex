export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: "Excepteur aliquip exercitation irure mollit nostrud ullamco cupidatat ullamco veniam quis.",
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: "Consequat consequat tempor ad laboris in incididunt exercitation.",
            picture: null,
        },
        {
            id: new Date().getTime() + 5000,
            date: new Date().toDateString(),
            text: "Amet voluptate reprehenderit ea laboris veniam adipisicing.",
            picture: null,
        },
]
})