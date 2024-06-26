const addZero = (number) => {
    if(number<10) return "0"+number
    else return number
}

export const formatPrice = (price) => (price/100).toFixed(2)+"€"


export const formatDate = (timestamp) => {
    const date = new Date(parseInt(timestamp))
    return date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" à "+date.getHours()+":"+addZero(date.getMinutes())
}

