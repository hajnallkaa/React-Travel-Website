import {OPEN_LIGHTBOX, CLOSE_LIGHTBOX} from '../types/GalleryTypes';

const GalleryReducer = (state, action) => {
    if(action.type === OPEN_LIGHTBOX){
        return {
            ...state,
            lightBoxStatus: true,
            curentLightBox: action.payload,
        }
    } else if(action.type === CLOSE_LIGHTBOX){
        return {
        ...state,
        lightBoxStatus: false,
        curentLightBox: {},
        }
    } else {
        return state;
    }
   
}

export default GalleryReducer;