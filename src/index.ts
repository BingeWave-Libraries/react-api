import Auth from "./Auth";
import Events from "./Events";
import Config from "./Config";
import Organizers from "./Organizers";
import Templates from "./Templates";

class BWAPI {
    public static Auth: Auth = Auth;

    public static Config: Config = Config;

    public static Events: Events = Events;

    public static Organizers: Organizers = Organizers;

    public static Templates: Templates = Templates;
}

export {Auth};
export {Config};
export {Events};
export {Organizers};
export {Templates};

export {BWAPI};
