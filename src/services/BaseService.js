class BaseService {

    static addListItem(entry) {
        return {
            type: BaseService.action.ADD_ENTRY,
            entry
        }
    }

    static editListItem(entry) {
        return {
            type: BaseService.action.EDIT_ENTRY,
            entry
        }
    }

    static deleteListItem(entry) {
        return {
            type: BaseService.action.DELETE_ENTRY,
            entry
        }
    }

    static createStore (reducer) {
        let state = [];
        let listeners = [];

        const getState = () => state;

        const dispatch = (action) => {
            state = reducer(state, action);
            listeners.forEach(listener => listener());
        };

        const subscribe = (listener) => {
            listeners.push(listener);
            return () => {
                listeners = listeners.filter(l => l !== listener);
            }
        };

        dispatch({});

        return { getState, dispatch, subscribe };

    };

    static baseReducer(state = [], action) {
        switch (action.type) {
            case BaseService.action.ADD_ENTRY:
                return [...state, action.entry];
            case BaseService.action.DELETE_ENTRY:
                return [
                    ...state.slice(0, action.entry),
                    ...state.slice(action.entry + 1)
                ];
            case BaseService.action.EDIT_ENTRY:
                return [
                    ...state.slice(0, index),
                    state[index] + 1,
                    ...state.slice(index + 1)
                ];
            default:
                return state;
        }
    }

    static getStore () {
        return BaseService.createStore(BaseService.baseReducer);
    }

}

BaseService.action = {
    ADD_ENTRY: 'add',
    EDIT_ENTRY: 'edit',
    DELETE_ENTRY: 'delete'
};

export default BaseService;
