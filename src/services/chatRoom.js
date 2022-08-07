function getHistory(max_chat_id, room_id){
    return new Promise((resolve, reject) => {
        axios({
            method:"get",
            url: "/api/chat/history",
            params:{
                room_id: room_id,
                min_id: max_chat_id
            }}).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        })
    })
}

export {
    getHistory
}