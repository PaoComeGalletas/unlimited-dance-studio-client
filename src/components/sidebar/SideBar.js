import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import styles from './sidebar.module.css'
import PersonIcon from '@mui/icons-material/Person';
import ClassIcon from '@mui/icons-material/Class';
import PaidIcon from '@mui/icons-material/Paid';
import HomeIcon from '@mui/icons-material/Home';

export default function SideBar() {
  return (
    <div className={styles.Sidebar}>
      <Menu menuItemStyles={{
        button: {
          ['&:hover']: {
            background: '#0b1b67'
          },
          ['&.active']: {
            background: '#0b1b67'
          }
        }
      }}>
        <MenuItem className={styles.row} component={ <Link to="/home"/>}> <HomeIcon/> Home</MenuItem>
        <MenuItem className={styles.row} component={ <Link to="/alumnos"/>}> <PersonIcon/> Alumnos</MenuItem>
        <MenuItem className={styles.row} component={ <Link to="/clases"/>}> <ClassIcon/> Clases</MenuItem>
        <MenuItem className={styles.row} component={ <Link to="/pagos"/>}> <PaidIcon/> Pagos</MenuItem>
      </Menu>
    </div>
  )
}
