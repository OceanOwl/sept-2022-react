import {Route, Routes} from "react-router-dom";


import {AlbumsPage, CommentsPage, HomePage, NotFoundPage, PostsPage, TodosPage} from "./pages";
import {Layout} from "./layouts";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'todos'} element={<TodosPage/>}/>
                    <Route path={'albums'} element={<AlbumsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={':id'} element={<PostsPage/>}/>
                    </Route>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};