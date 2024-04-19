
import {newsFeedActions, newsFeedReducer} from '../newsFeedSlice';

describe('newsFeedReducer', () => {
    const initialState = {
        newsFeed: [
            {authorName: 'Ivan', postText: 'Непрерывная интеграция (CI)', postDate: "22.10.22", likeCount: '1', id: '1', isLiked: false},
            {authorName: 'Nadia', postText: 'Непрерывная доставка (CD)', postDate: "12.01.23", likeCount: '25', id: '2', isLiked: true},
            {authorName: 'Alex', postText: 'Docker - это открытая платформа', postDate: "2.02.23", likeCount: '53', id: '3', isLiked: true},
        ]
    };


    it('should handle addPost', () => {
        const newPost = {
            id: '4',
            authorName: 'Test Author',
            postText: 'Test Post',
            postDate: '12.04.2024',
            likeCount: '0',
            isLiked: false
        };
        const actual = newsFeedReducer(initialState, newsFeedActions.addPost({ newPost }));
        expect(actual.newsFeed.length).toBe(4);
        expect(actual.newsFeed[0]).toEqual(newPost);
    });

    it('should handle toggleLike', () => {
        const postId = '5';

        let state = newsFeedReducer(initialState, newsFeedActions.addPost({
            newPost: { id: postId, authorName: 'Test Author', postText: 'Test Post', postDate: '12.04.2024', likeCount: '0', isLiked: false }
        }));

        state = newsFeedReducer(state, newsFeedActions.toggleLike({ id: postId, isLiked: true, newLikeCount: '1' }));
        expect(state.newsFeed[0].isLiked).toBe(true);
        expect(state.newsFeed[0].likeCount).toBe('1');
    });

    it('should handle changePost', () => {
        const postId = '6';

        let state = newsFeedReducer(initialState, newsFeedActions.addPost({
            newPost: { id: postId, authorName: 'Test Author', postText: 'Test Post', postDate: '12.04.2024', likeCount: '0', isLiked: false }
        }));

        state = newsFeedReducer(state, newsFeedActions.changePost({ id: postId, text: 'Updated Text' }));
        expect(state.newsFeed[0].postText).toBe('Updated Text');
    });

});