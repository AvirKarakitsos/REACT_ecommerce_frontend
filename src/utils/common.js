export const formatPrice = (price) => (price/100).toFixed(2)+"€"

export const formatDate = (timestamp) => {
    const date = new Date(parseInt(timestamp))
    return date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()
} 
