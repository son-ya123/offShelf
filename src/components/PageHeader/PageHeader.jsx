import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';

const PageHeader = () => (
  <HeaderContainer
  
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header  className="header-container" aria-label="Off shelf">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName href="/" prefix="">
          Off Shelf
        </HeaderName>
        <HeaderNavigation aria-label="Off shelf">
          <HeaderMenuItem href="/repos">Sign up</HeaderMenuItem>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
        >
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/repos">Sign up</HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar />
      </Header>
    )}
  />
);

export default PageHeader;