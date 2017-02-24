/**
 *
 * @providesModule actions
 *
 */

import PostActions from 'post-actions';
import CommentActions from 'comment-actions';

const actions = Object.assign({},
                              PostActions,
                              CommentActions);

export default actions;
                                            
