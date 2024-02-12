import { Link } from 'react-router-dom';
import cls from './App.module.scss';

import { AppRouter } from './providers/router';

export const App = () => {
    return (
        <div className={cls.app}>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <AppRouter />
        </div>
    );
};
