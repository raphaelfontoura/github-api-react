

export const formatDate = (date?: string) => {
    if (date === undefined) {
        return;
    }
    let dateToConvert = new Date(date);
    return dateToConvert.toLocaleDateString("pt-BR");
}