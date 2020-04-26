class ChatUI {
    constructor(list) {
        this.list = list;
    }

    render(data) {
        const timeDiff = dateFns.distanceInWordsToNow
            (data.createdat.toDate(), {suffix: true})

        const html = `
            <li class="list-group-item">
                <span class = "username">${data.username}</span>
                <span class = "message">${data.message}</span>
                <div class = "time">${timeDiff}</span>
            </li>
        `;

        this.list.innerHTML += html;
    }

    clearList() {
        this.list.innerHTML = '';
    }

}