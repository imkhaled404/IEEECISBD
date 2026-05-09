import './admin.css';
import Sidebar from './components/Sidebar';

export const metadata = {
    title: 'Admin Panel | IEEE CS BDC',
    description: 'Admin panel for managing content and committee',
};

export default function AdminLayout({ children }) {
    return (
        <div className="admin-container">
            <Sidebar />
            <main className="admin-main">
                {children}
            </main>
        </div>
    );
}
