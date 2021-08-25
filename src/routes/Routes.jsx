import {
    Route,
    Redirect,
    Switch,
} from "react-router-dom";
import { Frontpage} from "../pages/FrontPage/FrontPage";
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { ResevationsPage } from "../pages/ResevationsPage/ResevationsPage";
import { RoomPage } from "../pages/RoomPage/RoomPage";
import { HotelsPage} from "../pages/HotelsPage/Hotels";
import { Hotels } from "../components/Hotels/Hotels";


export function Routes () {

    return(
        <Switch>
            <Route exact path="/frontpage">
                <Frontpage/>
            </Route>

            <Route exact path="/hotels">
                <Redirect to="/hotels/1" />
                </Route>

            <Route path="/hotels/:land">
                <HotelsPage/>
            </Route>

            <Route exact path="/roompage">
                <RoomPage/>
            </Route>

            <Route exact path="/resevationspage">
                <ResevationsPage/>
            </Route>

            <Route exact path="/loginpage">
                <LoginPage/>
            </Route>
        </Switch>
    )
}