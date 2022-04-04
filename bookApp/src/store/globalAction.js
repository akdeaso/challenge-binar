export const setLoading = status => {
    return {
        type: 'SET_LOADING',
        status,
    };
};

export const setRefresh = refresh => {
    return {
        type: 'SET_REFRESH',
        refresh,
    };
};