import { CHANGE_RATING } from '../../constants/actionTypes';


export default function changeRating(rate,itemNumber) {
 return {
    type: CHANGE_RATING,
    rate:rate,
    itemNumber:itemNumber
  };
}
