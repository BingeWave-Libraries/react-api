import Auth from "./Auth";
import Events from "./Events";
import Config from "./Config";
import Organizers from "./Organizers";
import Templates from "./Templates";
import Widgets from "./Widgets";
import Videos from "./Videos";
import Products from "./Products"

class BWAPI {

    public static Auth: Auth = Auth;

    public static Config: Config = Config;

    public static Events: Events = Events;

    public static Organizers: Organizers = Organizers;

    public static Products : Products = Products;

    public static Templates: Templates = Templates;

    public static Widgets: Widgets = Widgets;

    public static Videos: Videos= Videos;
    
}

export {Auth};
export {Config};
export {Events};
export {Organizers};
export {Products}
export {Templates};
export {Widgets};
export {Videos}

export {BWAPI};
