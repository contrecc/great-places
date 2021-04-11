import Place from "../models/place";
import { ADD_PLACE, SET_PLACES } from "./places-actions";

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACES:
      return {
        places: action.places.map(
          (place) =>
            new Place(
              place.id.toString(),
              place.title,
              place.imageUri,
              place.address,
              place.latitude,
              place.longitude
            )
        ),
      };

    case ADD_PLACE:
      const newPlace = new Place(
        action.placeData.id.toString(),
        action.placeData.title,
        action.placeData.image,
        action.placeData.address,
        action.placeData.coordinates.latitude,
        action.placeData.coordinates.longitude
      );
      return {
        places: state.places.concat(newPlace),
      };

    default:
      return state;
  }
};
