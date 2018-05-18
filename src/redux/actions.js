const types = {
    UPDATE_TITLE: 'UPDATE_TITLE'
}

export const updateTitle = (title) => {
    return {
        type: types.UPDATE_TITLE,
        payload: title
    }
}

export default types
