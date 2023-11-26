import React from 'react';
import { Col } from 'react-bootstrap';
import { StyleSheet, css } from 'aphrodite';
import Logo from '../../assets/icon-logo';
import TitleComponent from "./TitleComponent";
import MenuItemComponent from "./MenuItemComponent";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#363740',
        width: 255,
        paddingTop: 32
    },
    menuItemList: {
        marginTop: 52
    },
    separator: {
        borderTop: '1px solid #DFE0EB',
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    }
});

function SidebarComponent() {
    return(
        <Col className={css(styles.container)}>
            <TitleComponent />
            <Col className={css(styles.menuItemList)}>
                <MenuItemComponent title="Overview" />
                <MenuItemComponent title="Tickets" />
                <MenuItemComponent title="Ideas" />
                <MenuItemComponent title="Contacts" />
                <MenuItemComponent title="Agents" />
                <MenuItemComponent title="Articles" />
                <div className={css(styles.separator)}></div>
                <MenuItemComponent title="Settings" />
                <MenuItemComponent title="Subscription" />
            </Col>
        </Col>
    );
}

export default SidebarComponent;

