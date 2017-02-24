/**
 *
 * @providesModule actions
 * @flow
 *
 */

import PostActions from 'post-actions';
import CommentActions from 'comment-actions';

const actions: {[id: string]: ReduxAction} = Object.assign({},
                                                           PostActions,
                                                           CommentActions);

export default actions;
