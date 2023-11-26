import logo from './logo.svg';
import './App.css';
import TitleComponent from "./TitleComponent";
import MenuItemComponent from "./MenuItemComponent";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import TopicOverViewPage from "./TopicOverviewPage";
import FormulaSheetGeneratorPage from "./FormulaSheetGeneratorPage";
import QuizGeneratorPage from "./QuizGeneratorPage";

type Theme = 'light' | 'dark';

const themes = {
    light: {
        sidebar: {
            backgroundColor: '#ffffff',
            color: '#607489',
        },
        menu: {
            menuContent: '#fbfcfd',
            icon: '#0098e5',
            hover: {
                backgroundColor: '#c5e4ff',
                color: '#44596e',
            },
            disabled: {
                color: '#9fb6cf',
            },
        },
    },
    dark: {
        sidebar: {
            backgroundColor: '#0b2948',
            color: '#8ba1b7',
        },
        menu: {
            menuContent: '#082440',
            icon: '#59d0ff',
            hover: {
                backgroundColor: '#00458b',
                color: '#b6c8d9',
            },
            disabled: {
                color: '#3e5e7e',
            },
        },
    },
};

// hex to rgba converter
const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

function App() {

    return (
    <div style={{ display: 'flex', height: '100%'}}>
        <Sidebar
            backgroundColor={hexToRgba(themes.dark.sidebar.backgroundColor, 1)}
            rootStyles={{
                color: themes.dark.sidebar.color,
            }}
        >

        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Menu>
                <MenuItem> Topic Overview </MenuItem>
                <MenuItem> Formula Sheet Generator </MenuItem>
                <MenuItem> Quiz Generator </MenuItem>
            </Menu>
        </div>

        </Sidebar>

        <main>
            <div style={{ padding: '16px 24px', color: '#44596e' }}>
                <div style={{ marginBottom: '48px' }}>
                    <div> <TopicOverViewPage /> </div>
                    <div> <FormulaSheetGeneratorPage /> </div>
                    <div> <QuizGeneratorPage /> </div>
                </div>
            </div>
        </main>
    </div>
    );
}

export default App;
