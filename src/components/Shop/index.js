import { useState } from 'react';
import GlobalStyles from '../../GlobalStyles';
import Nav from '../Partials/Nav';
import Footer from '../Partials/Footer';
import classNames from 'classnames/bind';
import { Checkbox } from '@mui/material';
import styles from './Shop.module.scss';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import Pagination from '@mui/material/Pagination';
import ProductCard from './ProductCard';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import products from '../../data/listProducts';

const cx = classNames.bind(styles);

function Shop() {
    // LEFT
    const [openPrice, setOpenPrice] = useState(false);
    const [openStar, setOpenStar] = useState(false);

    const handleClickPrice = () => {
        setOpenPrice(!openPrice);
    };

    const handleClickStar = () => {
        setOpenStar(!openStar);
    };

    // RIGHT
    const listProduct = products;
    const [currentPage, setCurrentPage] = useState(1);

    const handleChange = (event, value) => {
        window.scrollTo(0, 0);
        setCurrentPage(value);
    };

    const perItem = 6;
    const lastItemPage = perItem * currentPage;
    const firstItemPage = lastItemPage - perItem;
    const currentItem = listProduct.slice(firstItemPage, lastItemPage);

    const pageNumber = Math.ceil(listProduct.length / perItem);
    var pages = [];

    for (let i = 1; i <= pageNumber; i++) {
        pages.push(i);
    }

    // HANDLE FAVORITE
    const [favoriteList, setFavoriteList] = useState(() => {
        const storedData = localStorage.getItem('favoriteList');
        if (storedData) {
            return JSON.parse(storedData);
        }
        return [];
    });

    const handleFavoriteList = (productId) => {
        handleReloadSidebar();
        if (favoriteList.length < 2 && favoriteList.includes(productId)) {
            return setFavoriteList([]);
        } else if (favoriteList.includes(productId)) {
            let index = favoriteList.indexOf(productId);
            favoriteList.splice(index, 1);

            return setFavoriteList([...favoriteList]);
        }
        return setFavoriteList([...favoriteList, productId]);
    };

    localStorage.setItem('favoriteList', JSON.stringify(favoriteList));

    const [reloadSidebar, setReloadSidebar] = useState(favoriteList.length);

    const handleReloadSidebar = () => {
        setReloadSidebar(favoriteList.length + 1);
    };

    const handleReloadCartSidebar = () => {
        setReloadSidebar(cartList.length + 1);
    };

    const handleRemoveFav = (id) => {
        handleFavoriteList(id);
    };

    // HANDLE CART
    const [cartList, setCartList] = useState(() => {
        const storedData = localStorage.getItem('cartList');
        if (storedData) {
            return JSON.parse(storedData);
        }
        return [];
    });
    const handleCartList = (productId) => {
        handleReloadCartSidebar();
        if (cartList.length < 2 && cartList.includes(productId)) {
            return setCartList([]);
        } else if (cartList.includes(productId)) {
            let index = cartList.indexOf(productId);
            cartList.splice(index, 1);
            return setCartList([...cartList]);
        }
        return setCartList([...cartList, productId]);
    };

    localStorage.setItem('cartList', JSON.stringify(cartList));

    return (
        <GlobalStyles>
            <Nav reloadSidebar={reloadSidebar} onReloadCartSidebar={handleReloadCartSidebar} onRemoveFav={handleRemoveFav} />
            <div className={cx('wrapper')}>
                <div className={cx('leftContent')}>
                    <h2 className={cx('labelCategories')}>Categories</h2>
                    <ListItemButton onClick={handleClickPrice}>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="Range Price" />
                        {openPrice ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openPrice} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ul className={cx('rangePrice')}>
                                    <li>
                                        <Checkbox />
                                        100$-199$
                                    </li>
                                    <li>
                                        <Checkbox />
                                        200$-299$
                                    </li>
                                    <li>
                                        <Checkbox />
                                        300$-399$
                                    </li>
                                    <li>
                                        <Checkbox />
                                        400$-499$
                                    </li>
                                    <li>
                                        <Checkbox />
                                        500$-599$
                                    </li>
                                </ul>
                            </ListItemButton>
                        </List>
                    </Collapse>

                    {/* STAR */}
                    <ListItemButton onClick={handleClickStar}>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="Categories" />
                        {openStar ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openStar} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ul className={cx('categories')}>
                                    <li>
                                        <Checkbox /> Chairs
                                    </li>
                                    <li>
                                        <Checkbox /> Tables
                                    </li>
                                    <li>
                                        <Checkbox /> Sofas
                                    </li>
                                    <li>
                                        <Checkbox /> Beds
                                    </li>
                                    <li>
                                        <Checkbox /> Bookshelves
                                    </li>
                                </ul>
                            </ListItemButton>
                        </List>
                    </Collapse>
                </div>
                <div className={cx('rightContent')}>
                    <div className={cx('rightContent_header')}>
                        <div className={cx('search')}>
                            <TextField
                                size="small"
                                label="Search"
                                placeholder="Typing something..."
                                id="outlined-basic"
                                variant="outlined"
                            />
                            <Button>
                                <SearchIcon />
                            </Button>
                        </div>
                    </div>
                    <div className={cx('products')}>
                        {currentItem.map((product, index) => (
                            <div key={index} className={cx('wrapProduct')}>
                                <ProductCard
                                    product={product}
                                    handleFavoriteClick={handleFavoriteList}
                                    onReloadSidebar={handleReloadSidebar}
                                    onReloadCartSidebar={handleReloadCartSidebar}
                                    handleCartClick={handleCartList}

                                />
                            </div>
                        ))}
                    </div>

                    <div className={cx('pagination')}>
                        <Pagination
                            count={pageNumber}
                            page={currentPage}
                            onChange={handleChange}
                            color="primary"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </GlobalStyles>
    );
}

export default Shop;
