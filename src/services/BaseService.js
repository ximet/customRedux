import Immutable from 'immutable';

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
        let state = new Immutable.List();
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

    static baseReducer(state = new Immutable.List(), action) {
        switch (action.type) {
            case BaseService.action.ADD_ENTRY:
                return state.push(action.entry);
            case BaseService.action.DELETE_ENTRY:
                return state.delete(action.entry);
            case BaseService.action.EDIT_ENTRY:
                return state.insert(action.entry);
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
