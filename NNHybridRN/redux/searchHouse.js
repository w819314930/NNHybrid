import { Types } from './base/actions';
import Network from '../network';
import { ApiPath } from '../network/ApiService';
import { RefreshState } from '../components/common/NNRefreshFlatList';
import AppUtil from '../utils/AppUtil';

export function loadData(params, currentPage, errorCallBack) {
    return dispatch => {
        dispatch({ type: currentPage == 1 ? Types.SEARCH_HOUSE_LOAD_DATA : Types.SEARCH_HOUSE_LOAD_MORE_DATA });
        console.log(currentPage);

        Network
            .my_request({
                apiPath: ApiPath.SEARCH,
                apiMethod: 'searchByPage',
                apiVersion: '1.0',
                params: {
                    ...params,
                    pageNo: currentPage,
                    pageSize: 10
                }
            })
            .then(response => {
                const tmpResponse = AppUtil.makeSureObject(response);
                const hasMoreData = currentPage < tmpResponse.totalPages;
                dispatch({
                    type: Types.SEARCH_HOUSE_LOAD_DATA_SUCCESS,
                    currentPage: ++currentPage,
                    houseList: AppUtil.makeSureArray(tmpResponse.resultList) ,
                    hasMoreData,
                });
            })
            .catch(error => {
                if (errorCallBack) errorCallBack(error.message);

                const action = { type: Types.SEARCH_HOUSE_LOAD_DATA_FAIL };
                if (currentPage == 1) action.houseList = [];

                dispatch(action);
            });
    }
}

const defaultState = {
    houseList: [],
    refreshState: RefreshState.Idle,
    currentPage: 1,
}

export function searchHouseReducer(state = defaultState, action) {
    switch (action.type) {
        case Types.SEARCH_HOUSE_LOAD_DATA: {
            return {
                ...state,
                refreshState: RefreshState.HeaderRefreshing,
            }
        }
        case Types.SEARCH_HOUSE_LOAD_MORE_DATA: {
            return {
                ...state,
                refreshState: RefreshState.FooterRefreshing,
            }
        }
        case Types.SEARCH_HOUSE_LOAD_DATA_FAIL: {
            return {
                ...state,
                refreshState: RefreshState.Failure,
                houseList: action.houseList ? action.houseList : state.houseList
            }
        }
        case Types.SEARCH_HOUSE_LOAD_DATA_SUCCESS: {
            const houseList = action.currentPage <= 2 ? action.houseList : state.houseList.concat(action.houseList);
            let refreshState = RefreshState.Idle;
            if (AppUtil.isEmptyArray(houseList)) {
                refreshState = RefreshState.EmptyData;
            } else if (!action.hasMoreData) {
                refreshState = RefreshState.NoMoreData;
            }

            return {
                ...state,
                houseList: action.currentPage <= 2 ? action.houseList : state.houseList.concat(action.houseList),
                currentPage: action.currentPage,
                refreshState,
            }
        }
        default:
            return state;
    }
}