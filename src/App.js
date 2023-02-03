import {Route,Routes} from "react-router-dom"
import {Layout} from './layouts'
import {CatsAndDogsPage, CommentsPage, HomePage, NotFoundPage, PostsPage} from "./pages";
import {CarPage} from "./pages/CarPage/CarPage";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}/>
                    <Route path={'cats and dogs'} element={<CatsAndDogsPage/>}/>
                    <Route path={'cars'} element={<CarPage/>}/>

                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};