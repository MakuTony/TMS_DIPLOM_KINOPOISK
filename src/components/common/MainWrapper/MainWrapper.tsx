import React, {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import {useTheme} from "../../../context/ThemeContext";
import {useScreenWidth} from "../../../context/ScreenWidthContext";
import {setMenuItemAction} from "../../../store/reducers/menuReducer";
import {RootState} from "../../../store";

import {PageProps, Routes} from "../../../constants/routes";
import {WithChildren} from "../../../types/withChildren";

import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Title, {TitleVariants} from "../Title/Title";

import styles from "../MainWrapper/MainWrapper.module.css";
import linkStyles from "../Link/Link.module.css";

const MainWrapper: FC<PageProps & WithChildren> = ({title= "", children}) => {
    const dispatch = useDispatch();

    const location = useLocation();

    const { isLightTheme } = useTheme();

    const {isPrimaryView, isTabletView} = useScreenWidth();

    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [userMenu, setUserMenu] = useState<boolean>(false);

    const { menuItem } = useSelector((state: RootState) => state.menu);

    const handleToggleBurgerMenu = () => {
        setOpenMenu(prevState => !prevState);
    };

    const handleSetUserMenu = () => setUserMenu(!userMenu);

    const closeMenu = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setUserMenu(false)
        }
    };

    const path = location.pathname.split("/");
    const pageName = path[path.length - 1];

    const handleSetActiveItem = (id: string) => {
        dispatch(setMenuItemAction(id))
    };

    const LINKS_CONFIG = [
        {
            id: "home",
            text: "Home",
            icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={linkStyles.svg} fillRule="evenodd" clipRule="evenodd" d="M11.4537 0.803197L16.4558 4.49793C17.4198 5.1956 17.9934 6.31112 18 7.50109V14.1895C17.938 16.3342 16.1566 18.0268 14.0116 17.979H3.99789C1.8492 18.032 0.0619475 16.338 0 14.1895V7.50109C0.00659331 6.31112 0.580187 5.1956 1.54421 4.49793L6.54632 0.803197C8.00682 -0.267732 9.99318 -0.267732 11.4537 0.803197ZM4.73684 13.9716H13.2632C13.6556 13.9716 13.9737 13.6535 13.9737 13.2611C13.9737 12.8687 13.6556 12.5506 13.2632 12.5506H4.73684C4.34443 12.5506 4.02632 12.8687 4.02632 13.2611C4.02632 13.6535 4.34443 13.9716 4.73684 13.9716Z" />
                  </svg>,
            to: Routes.home
        },
        {
            id: "trends",
            text: "Trends",
            icon: <svg className={styles.svg} width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={linkStyles.svg} d="M7.0513 0L5.6813 2.8C4.70235 4.80035 3.39031 6.61962 1.8013 8.18L1.6213 8.35C0.600764 9.34076 0.0176634 10.6977 0.00130184 12.12V12.3C-0.025728 15.0851 1.63391 17.6101 4.2013 18.69L4.4613 18.8C6.14517 19.5152 8.04744 19.5152 9.7313 18.8H9.7913C12.3779 17.6762 14.0375 15.1099 14.0013 12.29V7.95C13.1393 9.91853 11.5739 11.4946 9.6113 12.37C9.6113 12.37 9.6113 12.37 9.5513 12.37C9.4913 12.37 8.7913 12.66 8.4913 12.37C8.22335 12.0989 8.19769 11.6712 8.4313 11.37L8.5013 11.32H8.5513C10.8471 9.57498 11.3823 6.34172 9.7713 3.95C8.4713 1.97 7.0513 0 7.0513 0Z" fill="#80858B"/>
                  </svg>,
            to: Routes.trends
        },
        {
            id: "favorites",
            text: "Favorites",
            icon: <svg className={styles.svg} width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={linkStyles.svg} d="M11.77 17.7843L7.48 14.4943C7.07224 14.1843 6.50776 14.1843 6.1 14.4943L1.77 17.7843C1.45424 18.0381 1.02377 18.0959 0.652275 17.9343C0.280782 17.7727 0.0295672 17.4184 0 17.0143V2.95431C0.0387838 2.12998 0.404652 1.35513 1.01656 0.80141C1.62847 0.247691 2.4359 -0.0391904 3.26 0.0043149H10.26C11.0891 -0.0335703 11.8987 0.262563 12.5077 0.826425C13.1166 1.39029 13.4741 2.17479 13.5 3.00431V17.0143C13.4611 17.4038 13.2163 17.7426 12.8586 17.9017C12.501 18.0609 12.0855 18.0161 11.77 17.7843Z" fill="#80858B"/>
                  </svg>,
            to: Routes.favorites
        },
        {
            id: "settings",
            text: "Settings",
            icon: <svg className={styles.svg} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={linkStyles.svg} fillRule="evenodd" clipRule="evenodd" d="M17.2264 6.73077C17.4169 7.19491 17.8683 7.49854 18.37 7.5C19.0509 7.50549 19.6 8.05905 19.6 8.74V10.88C19.6 11.5648 19.0448 12.12 18.36 12.12C17.8583 12.1215 17.4069 12.4251 17.2164 12.8892C17.026 13.3534 17.134 13.8865 17.49 14.24C17.9676 14.7295 17.9676 15.5106 17.49 16L15.99 17.5C15.5005 17.9776 14.7195 17.9776 14.23 17.5C14.0042 17.2608 13.6889 17.1267 13.36 17.13C13.0294 17.1273 12.7114 17.2568 12.4767 17.4896C12.242 17.7225 12.11 18.0394 12.11 18.37C12.11 19.0548 11.5548 19.61 10.87 19.61H8.73C8.04517 19.61 7.49 19.0548 7.49 18.37C7.49001 18.0394 7.358 17.7225 7.12328 17.4896C6.88857 17.2568 6.5706 17.1273 6.24 17.13C5.91111 17.1267 5.59576 17.2608 5.37 17.5C4.88055 17.9776 4.09945 17.9776 3.61 17.5L2.11 16C1.63237 15.5106 1.63237 14.7295 2.11 14.24C2.46605 13.8865 2.57402 13.3534 2.38355 12.8892C2.19308 12.4251 1.7417 12.1215 1.24 12.12C0.911132 12.12 0.595733 11.9894 0.363188 11.7568C0.130642 11.5243 0 11.2089 0 10.88V8.74C0 8.05517 0.555167 7.5 1.24 7.5C1.7417 7.49854 2.19308 7.19491 2.38355 6.73077C2.57402 6.26664 2.46605 5.73346 2.11 5.38C1.63237 4.89055 1.63237 4.10945 2.11 3.62L3.61 2.12C4.09945 1.64237 4.88055 1.64237 5.37 2.12C5.59576 2.35919 5.91111 2.49331 6.24 2.49C6.57234 2.49269 6.89185 2.36186 7.12685 2.12685C7.36186 1.89185 7.49269 1.57234 7.49 1.24C7.49 0.555167 8.04517 0 8.73 0H10.88C11.5648 0 12.12 0.555167 12.12 1.24C12.1173 1.57234 12.2481 1.89185 12.4831 2.12685C12.7182 2.36186 13.0377 2.49269 13.37 2.49C13.6989 2.49331 14.0142 2.35919 14.24 2.12C14.7295 1.64237 15.5105 1.64237 16 2.12L17.5 3.62C17.9776 4.10945 17.9776 4.89055 17.5 5.38C17.144 5.73346 17.036 6.26664 17.2264 6.73077ZM6.33984 9.8101C6.33984 7.89919 7.88894 6.3501 9.79984 6.3501C10.7175 6.3501 11.5976 6.71463 12.2464 7.36351C12.8953 8.01238 13.2598 8.89245 13.2598 9.8101C13.2598 11.721 11.7107 13.2701 9.79984 13.2701C7.88894 13.2701 6.33984 11.721 6.33984 9.8101Z" fill="#80858B"/>
                  </svg>,
            to: Routes.settings
        },
    ];

    useEffect(() => {
        if (!LINKS_CONFIG.find(item => item.id === pageName)) {
            dispatch(setMenuItemAction("home"))
        } else dispatch(setMenuItemAction(pageName))
    }, [location.pathname])
        
    return (
        <div
            onClick={closeMenu}
            className={`${!openMenu ? styles.wrapper : styles.forMenu} ${isLightTheme ? styles.light : styles.dark}`}
        >
            <Header open={openMenu} onClick={handleToggleBurgerMenu} menu={userMenu} onChange={handleSetUserMenu} />
            <div className={styles.block}>
                <main className={styles.main}>
                    {isPrimaryView &&
                        <Menu activeLink={menuItem} onClick={handleSetActiveItem} config={LINKS_CONFIG} open={openMenu} />
                    }
                    {isTabletView && !!title && <Title text={title} variant={TitleVariants.main} />}
                    {children}
                </main>
            </div>
            {openMenu && <Menu config={LINKS_CONFIG} open={openMenu} activeLink={menuItem} onClick={handleSetActiveItem} />}
        </div>
    );
};

export default MainWrapper;