const startLoading = () => {
    return {
        type: "StartLoading"
    }
}
const endLoading = () => {
    return {
        type: "EndLoading"
    }
}
export { startLoading, endLoading };