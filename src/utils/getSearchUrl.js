import { 
  SEARCH_OPTIONS,
  PLANETS_URL,
  SPECIES_URL,
  STARSHIPS_URL
} from "../constants";

export default function getSearchUrl(text, option) {
  switch (option) {
	  case SEARCH_OPTIONS[0]:
	    return `${PLANETS_URL}?search=${text}`;
	    break;
	  case SEARCH_OPTIONS[1]:
	    return `${SPECIES_URL}?search=${text}`;
	    break;
	  case SEARCH_OPTIONS[2]:
	    return `${STARSHIPS_URL}?search=${text}`;
	    break;
	  default:
	    return `${PLANETS_URL}?search=${text}`;
	    break;
	}
}
