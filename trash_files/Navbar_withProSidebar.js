import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from "react-pro-sidebar";
import { useState } from 'react';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import '../templatesCss/navbar.css'

export const NavBar = () => {
    const [isExpanded, setIsExpanded] = useState(true)
    
    return (
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar 
            className="sidebar-menu" 
            collapsed={!isExpanded} 
            rootStyles={{
                [`.${sidebarClasses.container}`]: {
                backgroundColor: 'white',
                },
            }}>
          <Menu 
            className="menu"
            menuItemStyles={{
                button: ({ level, active, disabled }) => {
                  // only apply styles on first level elements of the tree
                  if (level === 0)
                    return {
                      color: disabled ? '#f5d9ff' : '#d359ff',
                      backgroundColor: active ? '#eecef9' : undefined,
                      border: null,
                      borderBlock: '#f0000'
                    };
                },
              }}>
            <MenuItem icon={<MenuRoundedIcon onClick={() => {
                  setIsExpanded(!isExpanded);}}
                />
            }>
            </MenuItem>
            <MenuItem className="Dashboard" icon={<GridViewRoundedIcon />}> Dashboard </MenuItem>
            <SubMenu label="Imóveis" icon={<TableRowsOutlinedIcon />}>
              <SubMenu label="Filtros" icon={<FilterAltOutlinedIcon />}>
                <MenuItem> Estado </MenuItem>
                    <SubMenu label="Cidades">
                    {/* Aqui você pode adicionar o seu dropdown */}
                        <MenuItem>São Paulo</MenuItem>
                        <MenuItem>Rio de Janeiro</MenuItem>
                        <MenuItem>Minas Gerais</MenuItem>
                    {/* Adicione mais cidades conforme necessário */}
                </SubMenu>
              </SubMenu>
            </SubMenu>
            <MenuItem icon={<LogoutRoundedIcon />}> Logout </MenuItem>
          </Menu>
        </Sidebar>
        <h1>WELCOME TO QUICKPAY</h1>
      </div>
    );
  };
