/**
 * Created by Maple on 17/3/23.
 */
import * as ActionTypes from '../../constants/ActionTypes';
import { Map, List, fromJS } from 'immutable';

const initialSelectedSuggestQuery = Map({
    '分类': '全部',
    '制片国家/地区': '全部',
    '类型': '全部',
    '年代': '全部',
});

export const selectedSuggestQuery = (state = initialSelectedSuggestQuery, action) => {
    switch (action.type) {
        case ActionTypes.SELECT_SUGGEST_QUERY:
            return state.set(action.key, action.value);
            break;
        case ActionTypes.RESET_SUGGEST_QUERY:
            return initialSelectedSuggestQuery;
            break;
        default:
            return state;
    }
};



// const fetchStatus = ($state = Map({
//                       isFetching: false,
//                       $items: List()
//                   }), action) => {
//     switch (action.type) {
//         case ActionTypes.REQUEST_MOVIE_DATA:
//             return $state.set('isFetching', true);
//             break;
//         case ActionTypes.RECEIVE_MOVIE_DATA:
//             return $state
//                 .set('isFetching',false)
//                 .set('items', fromJS(action.json));
//             break;
//         default:
//             return $state;
//     }
// };

export const movieData = (state = Map({
                              movie: Map(),
                              isFetching: false,
                              items: List(),
                              count: 0,
                              pageSize: 12,
                              pageIndex: 0
                          }), action) => {
    switch (action.type) {
        case ActionTypes.REQUEST_MOVIE_DATA:
            return state
                .set('pageIndex', action.pageIndex)
                .set('isFetching', true);
            break;
        case ActionTypes.RECEIVE_MOVIE_DATA:
            if (action.json['count'] === 0) {
                return state
                    .set('count', 0)
                    .set('isFetching', false);
            } else {
                return state
                    .set('count', action.json['count'])
                    .set('items', fromJS(action.json['items']))
                    .set('isFetching', false);
            }
            break;
        case ActionTypes.SELECT_MOVIE:
            return state.set('movie', state.get('items').find((v) => {
                    return v.get('id') === action.id
                }));
        default:
            return state;
    }
};