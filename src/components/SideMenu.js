import * as React from 'react';
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import PeopleIcon from '@mui/icons-material/People';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MergeIcon from '@mui/icons-material/Merge';
import SettingsIcon from '@mui/icons-material/Settings';
 
export default function SideMenu() {
    return (
        <>
            <List component="nav">
                <ListItemButton component="a" href="/">
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="ホーム" />
                </ListItemButton>
                <ListItemButton component="a" href="/branch">
                    <ListItemIcon>
                        <LibraryBooksIcon />
                    </ListItemIcon>
                    <ListItemText primary="ブランチ" />
                </ListItemButton>
                <ListItemButton component="a" href="/merge">
                    <ListItemIcon>
                        <MergeIcon />
                    </ListItemIcon>
                    <ListItemText primary="マージ" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ChangeHistoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="変更" />
                </ListItemButton>
                <ListItemButton component="a" href="/member">
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="メンバー" />
                </ListItemButton>
                <ListItemButton component="a" href="/setting">
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="設定" />
                </ListItemButton>
            </List>
        </>
    );
}