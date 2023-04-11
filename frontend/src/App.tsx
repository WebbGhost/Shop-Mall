import { Outlet } from 'react-router-dom';
import { Container } from './components';

function App() {
    return (
        <div className="flex flex-col h-screen">
            <Container>
                <header className="flex justify-between w-full">
                    <div className="items-center">
                        <h1>Shop Mall</h1>
                    </div>
                    <nav>
                        <ul className="flex">
                            <li>Cart</li>
                            <li>Sign IN</li>
                        </ul>
                    </nav>
                </header>
            </Container>
            <main>
                <Outlet />
            </main>
            <footer>The Shop Mall</footer>
        </div>
    );
}

export default App;
