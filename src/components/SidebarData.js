import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { RxTable } from "react-icons/rx";
import { BiSupport } from "react-icons/bi";
import { TbFolderStar } from "react-icons/tb";
import { BsFileBarGraph } from "react-icons/bs";


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
        title: 'Busca imóvel',
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
        title: 'Suporte',
        path: '/support',
        icon: <BiSupport />,
        cName: 'nav-text'
    }
]