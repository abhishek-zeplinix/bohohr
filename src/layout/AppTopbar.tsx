// import { classNames } from 'primereact/utils';
// import React, { forwardRef, useContext, useImperativeHandle, useRef, useState } from 'react';
// import { IconField } from 'primereact/iconfield';
// import { InputIcon } from 'primereact/inputicon';
// import { LayoutContext } from './context/layoutcontext';
// import { InputText } from "primereact/inputtext";
// import { Avatar } from 'primereact/avatar';
// import { Menu } from 'primereact/menu';
// import { Toast } from 'primereact/toast';
// import { ConfirmDialog } from 'primereact/confirmdialog';
// import { useAppContext } from './AppWrapper';
// import { get } from 'lodash';
// import { Link, useNavigate } from 'react-router-dom';
// import { AppTopbarRef } from '../types';
// import { getCompanyLogo } from '../utils/uitl';

// const AppTopbar = forwardRef<AppTopbarRef>((props, ref) => {
//     const { setAlert, setLoading, signOut, user } = useAppContext();
//     const navigate = useNavigate();
//     const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
//     const menubuttonRef = useRef(null);
//     const topbarmenuRef = useRef(null);
//     const topbarmenubuttonRef = useRef(null);

//     const [visible, setVisible] = useState<boolean>(false);
//     const menu = useRef<any>(null);
//     const items = [
//         {
//             template: (item: any, options: any) => {
//                 return (
//                     <div className="p-menuitem cursor-pointer" style={{ alignItems: 'center', padding: 10 }}>
//                         <div style={{ marginLeft: 10 }}>
//                             <span style={{ fontWeight: 'bold' }}>{get(user, 'displayName', 'U')}</span>
//                             <br></br>
//                             <span style={{ color: 'gray' }}>{get(user, 'email')}</span>
//                         </div>
//                     </div>
//                 );
//             }
//         },
//         // {
//         //     label: 'Profile',
//         //     icon: 'pi pi-user',
//         //     command: () => navigate('/profile')
//         // },
//         {
//             separator: true
//         },
//         {
//             label: 'Logout',
//             icon: 'pi pi-sign-out',
//             command: () => setVisible(true)
//         }
//     ];
//     useImperativeHandle(ref, () => ({
//         menubutton: menubuttonRef.current,
//         topbarmenu: topbarmenuRef.current,
//         topbarmenubutton: topbarmenubuttonRef.current
//     }));

//     const accept = () => {
//         signOut();
//     }

//     const avatrClick = (e: any) => {
//         if (menu) {
//             menu.current.toggle(e)
//         }
//     }

//     const onHide = () => setVisible(false)

//     return (
//         <div className="layout-topbar">
//             <Link to="/" className="layout-topbar-logo">
//                 <img src={'/images/BOHOHR.png'} width="100px" height={'35px'} alt="logo" />
//             </Link>

//             {
//                 layoutState.isMobile && <button ref={menubuttonRef} type="button" className="p-link layout-menu-button layout-topbar-button" onClick={onMenuToggle}>
//                     <i className="pi pi-bars" />
//                 </button>
//             }



//             <button ref={topbarmenubuttonRef} type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={avatrClick}>
//                 <Menu model={items} popup ref={menu} />
//                 <Avatar label={get(user, 'displayName') ? get(user, 'displayName')[0] : 'U'} style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" onClick={avatrClick} />
//             </button>

//             <div ref={topbarmenuRef} className={classNames('layout-topbar-menu', { 'layout-topbar-menu-mobile-active': layoutState.profileSidebarVisible })}>
//                 <div className="col-12 mb-2 lg:col-8 lg:mb-1">
//                     <IconField>
//                         <InputIcon className="pi pi-search"> </InputIcon>
//                         <InputText type="text" placeholder="Search"/>
//                     </IconField>
//                 </div>
//                 <span style={{ marginLeft: '2rem' }}></span>
//                 <span style={{ marginLeft: '2rem' }}></span>
//                 {/* <button type="button" className="p-link layout-topbar-button">
//                     <i className="pi pi-cog"></i>
//                     <span>Setting</span>
//                 </button> */}
//                 <button type="button" className="p-link layout-topbar-button profile-icon-setting">
//                     <Menu model={items} popup ref={menu} />
//                     <Avatar label={get(user, 'displayName') ? get(user, 'displayName')[0] : 'U'} style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" onClick={avatrClick} />
//                 </button>
//             </div>

//             {/* logout confim  */}
//             <ConfirmDialog className='custom-dialog' visible={visible} onHide={onHide} message="Are you sure you want to logout?"
//                 header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} />

//         </div>
//     );
// });

// AppTopbar.displayName = 'AppTopbar';

// export default AppTopbar;



import { classNames } from 'primereact/utils';
import React, { forwardRef, useContext, useImperativeHandle, useRef, useState } from 'react';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { LayoutContext } from './context/layoutcontext';
import { InputText } from "primereact/inputtext";
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { useAppContext } from './AppWrapper';
import { get } from 'lodash';
import { Link, useNavigate } from 'react-router-dom';
import { AppTopbarRef } from '../types';
import { getCompanyLogo } from '../utils/uitl';

const AppTopbar = forwardRef<AppTopbarRef>((props, ref) => {
    const { setAlert, setLoading, signOut, user } = useAppContext();
    const navigate = useNavigate();
    const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);

    const [visible, setVisible] = useState<boolean>(false);

    const menu = useRef<any>(null);
    const items = [
        {
            template: (item: any, options: any) => {
                return (
                    <div className="p-menuitem cursor-pointer" style={{ alignItems: 'center', padding: 10 }}>
                        <div style={{ marginLeft: 10 }}>
                            <span style={{ fontWeight: 'bold' }}>{get(user, 'displayName', 'U')}</span>
                            <br></br>
                            <span style={{ color: 'gray' }}>{get(user, 'email')}</span>
                        </div>
                    </div>
                );
            }
        },
        {
            label: 'Profile',
            icon: 'pi pi-user',
            command: () => navigate('/profile')
        },
        {
            separator: true
        },
        {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => setVisible(true)
        }
    ];
    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
        topbarmenubutton: topbarmenubuttonRef.current
    }));

    const accept = () => {
        signOut();
    }

    const avatrClick = (e: any) => {
        if (menu) {
            menu.current.toggle(e)
        }
    }

    const onHide = () => setVisible(false)
    const iconClass = classNames('pi', {
        'pi-arrow-down-left-and-arrow-up-right-to-center text-lg ': !layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === 'static',
        'pi-arrow-up-right-and-arrow-down-left-from-center text-lg': layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === 'static'
    });

    return (
        <div className="layout-topbar">
            {!layoutState.isMobile && (
                <div className="mt-auto">
                    <a
                        v-ripple="true"
                        onClick={onMenuToggle}
                        className="flex mb-1 justify-center items-center cursor-pointer p-2 text-gray-600 transition-all duration-500"
                    >
                        <i className={iconClass}></i>
                    </a>
                </div>
            )}
            <Link to="/" className="layout-topbar-logo">
                <img src={'/images/BOHOHR.png'} width="100px" height={'35px'} alt="logo" />
            </Link>

            {
                layoutState.isMobile && <button ref={menubuttonRef} type="button" className="p-link layout-menu-button layout-topbar-button" onClick={onMenuToggle}>
                    <i className="pi pi-bars" />
                </button>
            }

            <div ref={topbarmenuRef} className={classNames('layout-topbar-menu', { 'layout-topbar-menu-mobile-active': layoutState.profileSidebarVisible })}>
                <div>
                    <IconField className="relative custom-search-bar">
                        
                        <InputText type="text" placeholder="Search" className="custom-search-input pl-10" />
                        <i className="pi pi-search absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                    </IconField>
                </div>
                <span style={{ marginLeft: '2rem' }}></span>
                <span style={{ marginLeft: '2rem' }}></span>
                <button type="button" className="p-link layout-topbar-button">
                    <i className="pi pi-bell"></i>
                </button>
                <button type="button" className="p-link layout-topbar-button">
                    <i className="pi pi-question-circle"></i>
                </button>
                <button type="button" className="p-link layout-topbar-button">
                    <i className="pi pi-cog"></i>
                </button>
                <button type="button" className="p-link layout-topbar-button profile-icon-setting">
                    <Menu model={items} popup ref={menu} />
                    <Avatar label={get(user, 'displayName') ? get(user, 'displayName')[0] : 'U'} style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" onClick={avatrClick} />
                </button>
            </div>

            {/* logout confim  */}
            <ConfirmDialog className='custom-dialog' visible={visible} onHide={onHide} message="Are you sure you want to logout?"
                header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} />

        </div>
    );
});

AppTopbar.displayName = 'AppTopbar';

export default AppTopbar;