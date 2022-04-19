import { createSelector } from 'reselect';

export const getReviewListByType = (state, type) => 
    state.listreviewbyid.main_data.find((reviewList) => reviewList.reviewtype === type);

export const getReviewList = () => createSelector([getReviewListByType], (review) => review);

export const isApprove = (state) => {
    if (state.listreviewbyid.status === 'A') return true;
    return false;
};

export const getComments = (state) =>  {
    if (state.listreviewbyid.comment) {
        return state.listreviewbyid.comment
    }
}
    