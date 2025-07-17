import { LocationList } from "./HeroSectionHelper"
import { categoriesList } from "./HeroSectionHelper"
import { PopularVenuesList } from "./popularVenue"


const links = [
    { id : 1, name : "home" },
    { id : 2, name : "about" },
    { id : 3, name : "contactUs" },
    { id : 4, name : "Privacy policy" },
    { id : 5, name : "terms and conditions" },
]

export const footerLinks = [
    { id : 1, name : "Locations", linkName : LocationList.slice(0,5)  },
    { id : 2, name : "Categories", linkName : categoriesList.slice(0,5)  },
    { id : 3, name : "PopuarVenues", linkName : PopularVenuesList.map((item)=>item.name)  },
    { id : 4, name : "Quik Links", linkName : links.map((item)=>item.name)  },

]


