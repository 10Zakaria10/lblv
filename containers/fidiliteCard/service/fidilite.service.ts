
export const getFullName = (firstName:string, lastName:string)=>{
    return `${lastName} ${firstName}`
}

export const formatDate = (dateAsString: string) => {
    return new Date(dateAsString).toLocaleDateString();
}