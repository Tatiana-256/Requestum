export const addToHistory = (history: Array<string>, newItem: string) => {
    if (history.length > 4) {
        history.pop();
    }
    return [newItem, ...history];
};
