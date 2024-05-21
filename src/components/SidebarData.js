import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { RxTable } from "react-icons/rx";
import { BiSupport } from "react-icons/bi";
import { TbFolderStar } from "react-icons/tb";
import { BsFileBarGraph } from "react-icons/bs";
import { TbLogout2 } from "react-icons/tb";


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <BsFileBarGraph />,
        cName: 'nav-text'
    },
    {
        title: 'Busca imóveis',
        path: '/table',
        icon: <RxTable />,
        cName: 'nav-text'
    },
    {
        title: 'Favoritos',
        path: '/favorites',
        icon: <TbFolderStar />,
        cName: 'nav-text'
    },
    {
        title: 'Fale conosco',
        path: '/support',
        icon: <BiSupport />,
        cName: 'nav-text'
    },
    {
        title: 'Sair',
        path: '/logout',
        icon: <TbLogout2 />,
        cName: 'nav-text'
    }
]